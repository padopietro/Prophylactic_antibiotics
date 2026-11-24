import { PAGES } from "~/config/pages";
import { DEFAULT_LOCALE, LOCALES, localizePath } from "~/i18n";
import { absoluteUrl } from "~/lib/url";

/**
 * XML sitemap with hreflang alternates for every page in every locale.
 * Pre-rendered to /sitemap.xml at build time.
 */
export function loader() {
  const lastModified = new Date().toISOString().split("T")[0];

  const alternateLinks = (path: string) =>
    [
      ...LOCALES.map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(localizePath(path, locale))}"/>`,
      ),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizePath(path, DEFAULT_LOCALE))}"/>`,
    ].join("\n    ");

  const urls = LOCALES.flatMap((locale) =>
    PAGES.map(
      (page) => `  <url>
    <loc>${absoluteUrl(localizePath(page.path, locale))}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${page.sitemapPriority.toFixed(1)}</priority>
    ${alternateLinks(page.path)}
  </url>`,
    ),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
