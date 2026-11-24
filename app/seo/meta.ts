import type { MetaDescriptor } from "react-router";

import { getPagePath, type PageId } from "~/config/pages";
import { SITE } from "~/config/site";
import {
  DEFAULT_LOCALE,
  LOCALE_DETAILS,
  LOCALES,
  type Locale,
  getDictionary,
  getLocaleFromPathname,
  localizePath,
  stripLocale,
} from "~/i18n";
import type { SeoCopy } from "~/i18n/types";
import { absoluteUrl } from "~/lib/url";

import {
  type MedicalAudience,
  breadcrumbSchema,
  medicalStudySchema,
  medicalWebPageSchema,
  organizationSchema,
  websiteSchema,
} from "./structured-data";

interface SeoTagsInput {
  locale: Locale;
  /** Locale-independent path, e.g. "/about/". */
  path: string;
  seo: SeoCopy;
  /** Set for pages that must not appear in search results (e.g. 404). */
  noIndex?: boolean;
}

/**
 * Title, description, canonical, hreflang alternates, Open Graph and Twitter tags.
 */
function seoTags({ locale, path, seo, noIndex = false }: SeoTagsInput): MetaDescriptor[] {
  const canonicalUrl = absoluteUrl(localizePath(path, locale));
  const imageUrl = SITE.ogImage ? `${SITE.url}${SITE.ogImage}` : undefined;

  const alternates: MetaDescriptor[] = [
    ...LOCALES.map((alternateLocale) => ({
      tagName: "link",
      rel: "alternate",
      hrefLang: alternateLocale,
      href: absoluteUrl(localizePath(path, alternateLocale)),
    })),
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "x-default",
      href: absoluteUrl(localizePath(path, DEFAULT_LOCALE)),
    },
  ];

  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "robots", content: noIndex ? "noindex, follow" : "index, follow, max-image-preview:large" },
    ...(noIndex ? [] : [{ tagName: "link", rel: "canonical", href: canonicalUrl }, ...alternates]),

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:locale", content: LOCALE_DETAILS[locale].ogLocale },
    ...LOCALES.filter((other) => other !== locale).map((other) => ({
      property: "og:locale:alternate",
      content: LOCALE_DETAILS[other].ogLocale,
    })),
    ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : []),

    { name: "twitter:card", content: imageUrl ? "summary_large_image" : "summary" },
    ...(SITE.twitterHandle ? [{ name: "twitter:site", content: SITE.twitterHandle }] : []),
  ];
}

const PAGE_AUDIENCE: Partial<Record<PageId, MedicalAudience>> = {
  healthcareProfessionals: "Clinician",
  patientsPublic: "Patient",
};

/**
 * Complete meta for a content page: SEO tags plus JSON-LD structured data.
 * Usage in a route module: `export const meta = ({ location }) => pageMeta("about", location.pathname)`.
 */
export function pageMeta(pageId: PageId, pathname: string): MetaDescriptor[] {
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);
  const path = getPagePath(pageId);
  const { seo } = t.pages[pageId];
  const url = absoluteUrl(localizePath(path, locale));

  const structuredData =
    pageId === "home"
      ? [organizationSchema(), websiteSchema(locale), medicalStudySchema(locale)]
      : [
          medicalWebPageSchema({
            locale,
            url,
            name: seo.title,
            description: seo.description,
            audience: PAGE_AUDIENCE[pageId],
          }),
          breadcrumbSchema([
            { name: t.nav.home, url: absoluteUrl(localizePath("/", locale)) },
            { name: t.nav[pageId], url },
          ]),
        ];

  return [...seoTags({ locale, path, seo }), ...structuredData.map((schema) => ({ "script:ld+json": schema }))];
}

export function notFoundMeta(pathname: string): MetaDescriptor[] {
  const locale = getLocaleFromPathname(pathname);
  return seoTags({ locale, path: stripLocale(pathname), seo: getDictionary(locale).notFound.seo, noIndex: true });
}
