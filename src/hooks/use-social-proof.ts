import { useEffect, useState } from "react";

/**
 * Live social-proof numbers. GitHub allows 60 unauthenticated API requests
 * per hour per IP and Discord invites are public — both are fine to fetch
 * client-side, results are cached in localStorage for an hour so repeat
 * visits never hit the rate limit.
 */
const DOWNLOADS_KEY = "oc-gh-downloads";
const DISCORD_KEY = "oc-discord-members";
const TTL_MS = 60 * 60 * 1000;

const GITHUB_RELEASES_API = "https://api.github.com/repos/lighthurtsmyeyes/openchanger-website/releases";
const DISCORD_INVITE_API = "https://discord.com/api/v9/invites/PHWW2QDJJN?with_counts=true";

function readCache(key: string): number | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { value, expires } = JSON.parse(raw) as { value: unknown; expires: unknown };
    if (typeof value !== "number" || typeof expires !== "number" || Date.now() > expires) return null;
    return value;
  } catch {
    return null;
  }
}

function writeCache(key: string, value: number) {
  try {
    localStorage.setItem(key, JSON.stringify({ value, expires: Date.now() + TTL_MS }));
  } catch {
    /* storage unavailable */
  }
}

function useLiveNumber(cacheKey: string, url: string, extract: (data: unknown) => number): number | null {
  const [count, setCount] = useState<number | null>(() => readCache(cacheKey));

  useEffect(() => {
    if (count !== null) return;
    let cancelled = false;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: unknown) => {
        const value = extract(data);
        if (!cancelled && value > 0) {
          writeCache(cacheKey, value);
          setCount(value);
        }
      })
      .catch(() => {
        /* rate-limited or offline — the badge simply stays hidden */
      });
    return () => {
      cancelled = true;
    };
  }, [count, cacheKey, url, extract]);

  return count;
}

type GithubRelease = { assets?: { download_count?: number }[] };

/** Total downloads across all release assets of the repository. */
export function useDownloadsCount(): number | null {
  return useLiveNumber(DOWNLOADS_KEY, GITHUB_RELEASES_API, (data) =>
    (Array.isArray(data) ? (data as GithubRelease[]) : []).reduce(
      (sum, release) => sum + (release.assets ?? []).reduce((s, a) => s + (a.download_count ?? 0), 0),
      0,
    ),
  );
}

/** Approximate member count of the Discord server, resolved via the invite. */
export function useDiscordMembers(): number | null {
  return useLiveNumber(DISCORD_KEY, DISCORD_INVITE_API, (data) => {
    const n = (data as { approximate_member_count?: unknown }).approximate_member_count;
    return typeof n === "number" ? n : 0;
  });
}
