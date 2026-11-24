/**
 * Normalises a pathname so every URL on the site has one canonical form:
 * a leading and a trailing slash ("about" -> "/about/", "" -> "/").
 *
 * Trailing slashes match how static hosts serve `about/index.html`, which
 * avoids redirect hops and duplicate URLs for search engines.
 *
 * Kept dependency-free: it is also imported by `app/routes.ts` at build time.
 */
export function normalizePath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  return segments.length > 0 ? `/${segments.join("/")}/` : "/";
}
