import type { StudyMetricId } from "~/config/study";

/**
 * Shape of a translation dictionary. Every locale must provide every key,
 * so TypeScript flags any missing translation at build time.
 */

export interface SeoCopy {
  /** ~50–60 characters, primary keyword first. */
  title: string;
  /** ~140–160 characters, a readable summary that invites the click. */
  description: string;
}

export interface TextSection {
  heading: string;
  paragraphs: string[];
}

export interface ContentPageCopy {
  seo: SeoCopy;
  eyebrow: string;
  title: string;
  lead: string;
  sections: TextSection[];
}

export interface LinkCardCopy {
  title: string;
  description: string;
  cta: string;
}

export interface Dictionary {
  common: {
    skipToContent: string;
    mainNavigation: string;
    openMenu: string;
    closeMenu: string;
    changeLanguage: string;
    switchToDarkTheme: string;
    switchToLightTheme: string;
    breadcrumb: string;
    backToTop: string;
    externalLink: string;
    comingSoon: string;
  };
  nav: Record<"home" | "about" | "healthcareProfessionals" | "patientsPublic" | "studyProgress", string>;
  footer: {
    tagline: string;
    contactHeading: string;
    navigationHeading: string;
    followHeading: string;
    rights: string;
  };
  pages: {
    home: {
      seo: SeoCopy;
      hero: {
        eyebrow: string;
        title: string;
        lead: string;
        primaryCta: string;
        secondaryCta: string;
      };
      audiences: {
        heading: string;
        healthcareProfessionals: LinkCardCopy;
        patientsPublic: LinkCardCopy;
      };
      design: {
        heading: string;
        intro: string;
        steps: Array<{ title: string; description: string }>;
      };
      resources: {
        heading: string;
        protocol: LinkCardCopy;
        publication: LinkCardCopy;
        translations: LinkCardCopy;
      };
      quote: { text: string; author: string; role: string };
      sponsors: { heading: string; intro: string };
    };
    about: ContentPageCopy;
    healthcareProfessionals: ContentPageCopy & { dataCollectionCta: string };
    patientsPublic: ContentPageCopy;
    studyProgress: ContentPageCopy & {
      metricsHeading: string;
      lastUpdated: string;
      ofTarget: string;
      metrics: Record<StudyMetricId, string>;
    };
  };
  notFound: {
    seo: SeoCopy;
    title: string;
    lead: string;
    cta: string;
  };
}
