import { useEffect, useState } from "react";
import { LEGACY_DOWNLOADS } from "@/lib/site";

/**
 * Live social-proof numbers. GitHub allows 60 unauthenticated API requests
 * per hour per IP and Discord invites are public — both are fine to fetch
 * client-side, results are cached in localStorage for an hour so repeat
 * visits never hit the rate limit. Concurrent callers (hero + downloads
 * section) share one in-flight request per data source.
 */
const DOWNLOADS_KEY = "oc-gh-downloads";
const DISCORD_KEY = "oc-discord-members";
const TTL_MS = 60 * 60 * 1000;
/** /releases pages at 100 per page; a handful of pages covers years of releases. */
const MAX_RELEASE_PAGES = 5;

const GITHUB_RELEASES_API = "https://api.github.com/repos/lighthurtsmyeyes/openchanger-website/releases";
const DISCORD_INVITE_API = "https://discord.com/api/v9/invites/PHWW2QDJJN?with_counts=true";

const inflight = new Map<string, Promise<number | null>>();

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

/** Fetch with a single delayed retry — a transient 429/5xx or network blip
 *  at page load would otherwise hide the badge for the whole session. */
async function fetchWithRetry(url: string): Promise<Response> {
  const first = await fetch(url).catch(() => null);
  if (first && first.ok) return first;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const second = await fetch(url);
  if (!second.ok) throw new Error(String(second.status));
  return second;
}

/** rel="next" URL from a GitHub Link header, if the page has one. */
function nextLink(header: string | null): string | null {
  return header?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;
}

function sumGithubDownloads(data: unknown): number {
  const releases = Array.isArray(data) ? (data as { assets?: { download_count?: number }[] }[]) : [];
  return releases.reduce(
    (sum, release) => sum + (release.assets ?? []).reduce((s, a) => s + (a.download_count ?? 0), 0),
    0,
  );
}

function readDiscordMembers(data: unknown): number {
  const n = (data as { approximate_member_count?: unknown }).approximate_member_count;
  return typeof n === "number" ? n : 0;
}

/** Total downloads: legacy offset (wiped by an asset replacement) plus the
 *  sum across every release page, so per-version releases all add up. */
async function loadGithubDownloads(): Promise<number> {
  let total = 0;
  let url: string | null = `${GITHUB_RELEASES_API}?per_page=100`;
  for (let page = 0; url && page < MAX_RELEASE_PAGES; page += 1) {
    const res = await fetchWithRetry(url);
    total += sumGithubDownloads(await res.json());
    url = nextLink(res.headers.get("link"));
  }
  return total + LEGACY_DOWNLOADS;
}

async function loadDiscordMembers(): Promise<number> {
  return readDiscordMembers(await fetchWithRetry(DISCORD_INVITE_API).then((r) => r.json()));
}

function useLiveNumber(cacheKey: string, loader: () => Promise<number>): number | null {
  const [count, setCount] = useState<number | null>(() => readCache(cacheKey));

  useEffect(() => {
    if (count !== null) return;
    let cancelled = false;
    let request = inflight.get(cacheKey);
    if (!request) {
      request = loader()
        .then((value) => {
          if (value > 0) {
            writeCache(cacheKey, value);
            return value;
          }
          return null;
        })
        .catch(() => null);
      inflight.set(cacheKey, request);
      // A failed load must not poison later mounts — drop it so the next
      // mount can try again instead of reusing the null result forever.
      request.then((value) => {
        if (value === null) inflight.delete(cacheKey);
      });
    }
    request.then((value) => {
      if (!cancelled && value !== null) setCount(value);
    });
    return () => {
      cancelled = true;
    };
  }, [count, cacheKey, loader]);

  return count;
}

/** Total downloads across all release assets of the repository. */
export function useDownloadsCount(): number | null {
  return useLiveNumber(DOWNLOADS_KEY, loadGithubDownloads);
}

/** Approximate member count of the Discord server, resolved via the invite. */
export function useDiscordMembers(): number | null {
  return useLiveNumber(DISCORD_KEY, loadDiscordMembers);
}
