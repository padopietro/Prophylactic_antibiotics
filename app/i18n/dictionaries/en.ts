import type { Dictionary } from "../types";

/**
 * English (default locale).
 * TODO(content): every text marked as placeholder will be replaced with final copy.
 */
export const en: Dictionary = {
  common: {
    skipToContent: "Skip to main content",
    mainNavigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    changeLanguage: "Change language",
    switchToDarkTheme: "Switch to dark theme",
    switchToLightTheme: "Switch to light theme",
    breadcrumb: "Breadcrumb",
    backToTop: "Back to top",
    externalLink: "(external link)",
    comingSoon: "Coming soon",
  },
  nav: {
    home: "Home",
    about: "About the study",
    healthcareProfessionals: "Healthcare professionals",
    patientsPublic: "Patients & public",
    studyProgress: "Study progress",
  },
  footer: {
    tagline: "An international collaborative study on prophylactic antibiotics. Placeholder text to be replaced.",
    contactHeading: "Contact",
    navigationHeading: "Explore",
    followHeading: "Follow us",
    rights: "All rights reserved.",
  },
  pages: {
    home: {
      seo: {
        title: "Prophylactic Antibiotics Study | International Research",
        description:
          "An international study on antibiotic prophylaxis: study design, resources for healthcare professionals, patient information and recruitment progress.",
      },
      hero: {
        eyebrow: "International collaborative study",
        title: "Improving the use of prophylactic antibiotics worldwide",
        lead: "Placeholder summary of the study: its aim, population and why it matters. This text will be replaced with the final copy.",
        primaryCta: "Read the publication",
        secondaryCta: "About the study",
      },
      audiences: {
        heading: "Find the information for you",
        healthcareProfessionals: {
          title: "For healthcare professionals",
          description: "Protocol, eligibility criteria, data collection and how to join as a centre.",
          cta: "Information for clinicians",
        },
        patientsPublic: {
          title: "For patients and the public",
          description: "What the study is about, what it means for patients and how data is protected.",
          cta: "Information for patients",
        },
      },
      design: {
        heading: "Study design",
        intro: "Placeholder introduction to the study methodology.",
        steps: [
          { title: "Eligible centres", description: "Placeholder: which hospitals can take part." },
          { title: "Inclusion criteria", description: "Placeholder: which patients are included." },
          { title: "Follow-up", description: "Placeholder: duration and method of follow-up." },
          { title: "Collaborative authorship", description: "Placeholder: how collaborators are credited." },
        ],
      },
      resources: {
        heading: "Study resources",
        protocol: {
          title: "Study protocol",
          description: "Full protocol and supporting documents.",
          cta: "View protocol",
        },
        publication: {
          title: "Publication",
          description: "Peer-reviewed results of the study.",
          cta: "Read the paper",
        },
        translations: {
          title: "Translations",
          description: "Study materials available in multiple languages.",
          cta: "Browse translations",
        },
      },
      quote: {
        text: "Placeholder quote about the study's impact and the strength of global collaboration.",
        author: "Name Surname",
        role: "Chief Investigator",
      },
      sponsors: {
        heading: "Supported by",
        intro: "The study is made possible by the following organisations.",
      },
    },
    about: {
      seo: {
        title: "About the Study | Prophylactic Antibiotics Study",
        description:
          "Background, aims and steering committee of the international prophylactic antibiotics study. Learn why the study matters and who leads it.",
      },
      eyebrow: "About",
      title: "About the study",
      lead: "Placeholder lead paragraph describing the study background.",
      sections: [
        { heading: "Background", paragraphs: ["Placeholder paragraph."] },
        { heading: "Aims", paragraphs: ["Placeholder paragraph."] },
        { heading: "Steering committee", paragraphs: ["Placeholder paragraph."] },
      ],
    },
    healthcareProfessionals: {
      seo: {
        title: "For Healthcare Professionals | Prophylactic Antibiotics Study",
        description:
          "Protocol, eligibility, data collection and authorship for clinicians and centres joining the international prophylactic antibiotics study.",
      },
      eyebrow: "Healthcare professionals",
      title: "Information for healthcare professionals",
      lead: "Placeholder lead paragraph for clinicians and local leads.",
      sections: [
        { heading: "How to join", paragraphs: ["Placeholder paragraph."] },
        { heading: "Eligibility criteria", paragraphs: ["Placeholder paragraph."] },
        { heading: "Data collection", paragraphs: ["Placeholder paragraph."] },
      ],
      dataCollectionCta: "Go to data collection",
    },
    patientsPublic: {
      seo: {
        title: "For Patients & Public | Prophylactic Antibiotics Study",
        description:
          "Plain-language information for patients and the public about the prophylactic antibiotics study, what taking part means and how data is protected.",
      },
      eyebrow: "Patients & public",
      title: "Information for patients and the public",
      lead: "Placeholder lead paragraph written in plain language.",
      sections: [
        { heading: "What is this study about?", paragraphs: ["Placeholder paragraph."] },
        { heading: "What does it mean for me?", paragraphs: ["Placeholder paragraph."] },
        { heading: "How is my data protected?", paragraphs: ["Placeholder paragraph."] },
      ],
    },
    studyProgress: {
      seo: {
        title: "Study Progress | Prophylactic Antibiotics Study",
        description:
          "Live recruitment figures of the prophylactic antibiotics study: participating centres, countries and patients enrolled against target.",
      },
      eyebrow: "Progress",
      title: "Study progress",
      lead: "Placeholder lead paragraph about recruitment status.",
      sections: [{ heading: "Timeline", paragraphs: ["Placeholder paragraph."] }],
      metricsHeading: "Recruitment at a glance",
      lastUpdated: "Last updated",
      ofTarget: "of target",
      metrics: {
        centres: "Participating centres",
        countries: "Countries",
        patients: "Patients enrolled",
      },
    },
  },
  notFound: {
    seo: {
      title: "Page not found | Prophylactic Antibiotics Study",
      description: "The page you are looking for does not exist or has been moved.",
    },
    title: "Page not found",
    lead: "The page you are looking for does not exist or has been moved.",
    cta: "Back to home",
  },
};
