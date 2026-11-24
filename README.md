# Prophylactic Antibiotics Study — website

Informational website for an international study on prophylactic antibiotics.
Built with **React 19 + React Router 8 (framework mode) + Vite + Tailwind CSS 4**.
Every page is **pre-rendered to static HTML** at build time, so it is fast, SEO-friendly
and can be hosted on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Development server with hot reload           |
| `npm run build`     | Static build into `build/client`             |
| `npm run preview`   | Serve the static build locally               |
| `npm run typecheck` | Generate route types and run TypeScript      |
| `npm run lint`      | ESLint (TypeScript, React hooks, a11y rules) |
| `npm run format`    | Prettier (with Tailwind class sorting)       |

## Project structure

```
app/
  config/          Language-independent settings
    site.ts        Site name, URL, contacts, external links, sponsors
    study.ts       Study status and recruitment figures
    pages.ts       Page list (single source of truth for routes, nav, sitemap)
  i18n/            Internationalisation
    dictionaries/  en.ts (default) and it.ts — ALL visible text lives here
    types.ts       Dictionary shape: a missing translation fails the typecheck
  seo/             Meta tags, hreflang, Open Graph and JSON-LD structured data
  components/
    layout/        Header, footer, navigation, language & theme switches
    home/          Home page sections
    page/          Shared inner-page layout
    ui/            Small reusable building blocks
  routes/          One module per page + sitemap.xml and robots.txt
public/            Static files (favicon, manifest, images, logos)
```

## Adding content

1. **Text**: edit `app/i18n/dictionaries/en.ts` and `it.ts`. Every placeholder is marked
   in the code with `TODO(content)`.
2. **Links, contacts, sponsors**: edit `app/config/site.ts`. Links set to `"#"` are shown as
   "Coming soon" and are not clickable.
3. **Recruitment figures**: edit `app/config/study.ts`.
4. **Images / logos**: put them in `public/` and reference them from the config
   (e.g. `logo: "/logos/university.svg"`).
5. **Social preview image**: add a 1200×630 `public/og-image.png` and set `SITE.ogImage`.

### Adding a language

Add the locale to `LOCALES` and `LOCALE_DETAILS` in `app/i18n/config.ts`, create
`app/i18n/dictionaries/<locale>.ts` and register it in `app/i18n/index.ts`.
Routes, language switcher, hreflang tags and sitemap update automatically.

### Adding a page

Add it to `app/config/pages.ts`, map it to a route module in `app/routes.ts`, and add its
navigation label and copy to the dictionaries.

## SEO

- Static HTML for every page and language (`/` English, `/it/` Italian).
- Unique `<title>` and meta description per page and language.
- Canonical URLs, `hreflang` alternates (+ `x-default`) and `<html lang>`.
- Open Graph and Twitter Card tags.
- schema.org JSON-LD: `ResearchOrganization`, `WebSite`, `MedicalObservationalStudy`,
  `MedicalWebPage` (with `MedicalAudience`: clinicians / patients) and `BreadcrumbList`.
- `sitemap.xml` with language alternates and `robots.txt`, generated at build time.
- Semantic HTML, a single `h1` per page, skip link, accessible navigation.

## Deployment

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(enable it under **Settings → Pages → Source: GitHub Actions**).

Two environment variables control URLs (see `.env.example`):

- `VITE_SITE_URL` — public URL used for canonical/hreflang/sitemap.
- `BASE_PATH` — sub-path the site is served from (`/` with a custom domain).
