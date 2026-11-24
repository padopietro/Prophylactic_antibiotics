/**
 * Global, language-independent site settings.
 * Translatable copy lives in `app/i18n/dictionaries/*`.
 *
 * TODO(content): replace every placeholder value marked below before launch.
 */

const DEFAULT_SITE_URL = "https://padopietro.github.io/Prophylactic_antibiotics";

/** Public origin + base path, without trailing slash. Set VITE_SITE_URL per environment. */
const siteUrl = (import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/+$/, "");

export const SITE = {
  url: siteUrl,
  name: "Prophylactic Antibiotics Study", // TODO(content): official study name
  shortName: "PAS", // TODO(content): acronym shown in the header
  themeColor: "#0e7490",
  /** Optional 1200×630 PNG/JPG in /public, e.g. "/og-image.png". */
  ogImage: undefined as string | undefined,
  twitterHandle: undefined as string | undefined,
} as const;

/** External resources linked from the site. "#" marks a missing link. */
export const EXTERNAL_LINKS = {
  protocol: "#", // TODO(content): study protocol (PDF / Drive folder)
  publication: "#", // TODO(content): published paper / preprint
  dataCollection: "#", // TODO(content): REDCap or data collection platform
  translations: "#", // TODO(content): translated materials
} as const;

export const CONTACT = {
  email: "info@example.org", // TODO(content)
  phone: "+00 000 000 0000", // TODO(content)
  addressLines: ["Department name", "Institution", "City, Country"], // TODO(content)
} as const;

export const SOCIAL_LINKS: ReadonlyArray<{ name: string; href: string }> = [
  // TODO(content): e.g. { name: "X", href: "https://x.com/..." }
];

/** Supporting organisations shown in the sponsors grid. Add `logo` (path in /public) when available. */
export const SPONSORS: ReadonlyArray<{ name: string; href?: string; logo?: string }> = [
  { name: "Sponsor 1" },
  { name: "Sponsor 2" },
  { name: "Sponsor 3" },
  { name: "Sponsor 4" },
  { name: "Sponsor 5" },
  { name: "Sponsor 6" },
];
