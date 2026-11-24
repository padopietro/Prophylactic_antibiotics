import { SITE } from "~/config/site";
import { normalizePath } from "~/lib/path";

/** Builds the absolute public URL of a site path, used for canonical/OG/sitemap. */
export function absoluteUrl(path: string): string {
  return `${SITE.url}${normalizePath(path)}`;
}

export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
