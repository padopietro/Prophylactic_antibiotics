import { SITE } from "~/config/site";

/** Pre-rendered to /robots.txt at build time. */
export function loader() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
