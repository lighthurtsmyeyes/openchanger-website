/**
 * Canonical project links. Every CTA on the site must be a real <a href>
 * pointing here — crawlers follow links, not window.open() handlers.
 */
export const SITE_PATH = "/openchanger-website/";

export const RELEASE_URL =
  "https://github.com/lighthurtsmyeyes/openchanger-website/releases/download/Release/OpenChanger-x64-Windows.zip";

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
