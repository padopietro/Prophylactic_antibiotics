import { type RouteConfig, route } from "@react-router/dev/routes";

import { PAGES, type PageId } from "./config/pages";
import { LOCALES, localizePath } from "./i18n/config";

const PAGE_MODULES: Record<PageId, string> = {
  home: "routes/home.tsx",
  about: "routes/about.tsx",
  healthcareProfessionals: "routes/healthcare-professionals.tsx",
  patientsPublic: "routes/patients-public.tsx",
  studyProgress: "routes/study-progress.tsx",
};

/** One route per page and per locale, e.g. "/about/" and "/it/about/". */
const localizedPageRoutes = LOCALES.flatMap((locale) =>
  PAGES.map((page) =>
    route(localizePath(page.path, locale), PAGE_MODULES[page.id], {
      id: `${locale}.${page.id}`,
    }),
  ),
);

export default [
  ...localizedPageRoutes,
  route("sitemap.xml", "routes/sitemap.xml.ts"),
  route("robots.txt", "routes/robots.txt.ts"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
