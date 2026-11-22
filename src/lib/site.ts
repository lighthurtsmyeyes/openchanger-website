/**
 * Canonical project links. Every CTA on the site must be a real <a href>
 * pointing here — crawlers follow links, not window.open() handlers.
 */
export const SITE_PATH = "/openchanger-website/";

/**
 * Permanent "always the newest release" URL — points at whatever release is
 * currently marked latest, so publishing a new version never requires a site
 * edit. Publish a NEW release per version: replacing the zip inside an
 * existing release resets its download counter on GitHub.
 */
export const RELEASE_URL =
  "https://github.com/lighthurtsmyeyes/openchanger-website/releases/latest/download/OpenChanger-x64-Windows.zip";

/**
 * Downloads GitHub no longer counts. Replacing a release asset resets its
 * counter, and the pre-reset total (~1182, wiped 2026-11) is kept here so
 * the public counter keeps its history. Don't grow this constant — with
 * per-version releases the live sum only ever grows.
 */
export const LEGACY_DOWNLOADS = 1182;

export const RELEASES_PAGE_URL =
  "https://github.com/lighthurtsmyeyes/openchanger-website/releases";

export const REPO_URL = "https://github.com/lighthurtsmyeyes/openchanger-website";

export const DISCORD_URL = "https://discord.gg/invite/PHWW2QDJJN";

/** Guide pages are static HTML shipped from public/guides/. */
export const GUIDES = {
  home: "guides/",
  skinChanger: "guides/skin-changer-dota-2.html",
  howToChange: "guides/kak-pomenyat-skiny-dota-2.html",
  arcana: "guides/arcany-dota-2.html",
} as const;
