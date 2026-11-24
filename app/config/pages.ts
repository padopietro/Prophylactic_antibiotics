/**
 * Single source of truth for the site's pages.
 * Used by the router (`app/routes.ts`), the navigation and the sitemap.
 */
export const PAGES = [
  { id: "home", path: "/", sitemapPriority: 1.0 },
  { id: "about", path: "/about/", sitemapPriority: 0.8 },
  { id: "healthcareProfessionals", path: "/healthcare-professionals/", sitemapPriority: 0.8 },
  { id: "patientsPublic", path: "/patients-and-public/", sitemapPriority: 0.8 },
  { id: "studyProgress", path: "/study-progress/", sitemapPriority: 0.6 },
] as const;

export type PageId = (typeof PAGES)[number]["id"];

export function getPagePath(id: PageId): string {
  const page = PAGES.find((candidate) => candidate.id === id);
  if (!page) throw new Error(`Unknown page id: ${id}`);
  return page.path;
}
