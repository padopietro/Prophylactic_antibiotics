import { SITE, SPONSORS } from "~/config/site";
import { STUDY } from "~/config/study";
import { type Locale, getDictionary } from "~/i18n";
import { absoluteUrl } from "~/lib/url";

/**
 * schema.org JSON-LD builders. Entities reference each other through stable
 * `@id`s so search engines can merge them into a single knowledge graph.
 */

type JsonLd = Record<string, unknown>;

const ids = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  study: `${SITE.url}/#study`,
};

export type MedicalAudience = "Clinician" | "Patient" | "MedicalResearcher";

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "@id": ids.organization,
    name: SITE.name,
    url: absoluteUrl("/"),
  };
}

export function websiteSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ids.website,
    name: SITE.name,
    url: absoluteUrl("/"),
    inLanguage: locale,
    publisher: { "@id": ids.organization },
  };
}

export function medicalStudySchema(locale: Locale): JsonLd {
  const { pages } = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "MedicalObservationalStudy",
    "@id": ids.study,
    name: SITE.name,
    description: pages.home.seo.description,
    url: absoluteUrl("/"),
    status: `https://schema.org/${STUDY.status}`,
    healthCondition: { "@type": "MedicalCondition", name: STUDY.healthCondition },
    studySubject: { "@type": "MedicalEntity", name: STUDY.studySubject },
    sponsor: SPONSORS.map((sponsor) => ({ "@type": "Organization", name: sponsor.name })),
  };
}

interface WebPageSchemaInput {
  locale: Locale;
  url: string;
  name: string;
  description: string;
  audience?: MedicalAudience;
}

/** MedicalWebPage signals health content and its intended audience to search engines. */
export function medicalWebPageSchema({ locale, url, name, description, audience }: WebPageSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.study },
    ...(audience && { audience: { "@type": "MedicalAudience", audienceType: audience } }),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
