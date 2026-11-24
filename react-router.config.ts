import type { Config } from "@react-router/dev/config";

/**
 * Static site generation: every route is pre-rendered to HTML at build time
 * (great for SEO and performance) and no runtime server is required.
 *
 * BASE_PATH lets the site live under a sub-path (e.g. GitHub Pages project
 * sites served at /<repository>/). It must match `base` in vite.config.ts.
 */
export default {
  ssr: false,
  prerender: true,
  basename: process.env.BASE_PATH ?? "/",
} satisfies Config;
