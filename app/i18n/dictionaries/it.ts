import type { Dictionary } from "../types";

/**
 * Italiano.
 * TODO(content): tutti i testi segnaposto verranno sostituiti con i testi definitivi.
 */
export const it: Dictionary = {
  common: {
    skipToContent: "Vai al contenuto principale",
    mainNavigation: "Navigazione principale",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    changeLanguage: "Cambia lingua",
    switchToDarkTheme: "Passa al tema scuro",
    switchToLightTheme: "Passa al tema chiaro",
    breadcrumb: "Percorso di navigazione",
    backToTop: "Torna su",
    externalLink: "(link esterno)",
    comingSoon: "Disponibile a breve",
  },
  nav: {
    home: "Home",
    about: "Lo studio",
    healthcareProfessionals: "Professionisti sanitari",
    patientsPublic: "Pazienti e cittadini",
    studyProgress: "Avanzamento",
  },
  footer: {
    tagline: "Uno studio collaborativo internazionale sulla profilassi antibiotica. Testo segnaposto da sostituire.",
    contactHeading: "Contatti",
    navigationHeading: "Esplora",
    followHeading: "Seguici",
    rights: "Tutti i diritti riservati.",
  },
  pages: {
    home: {
      seo: {
        title: "Studio sulla Profilassi Antibiotica | Ricerca internazionale",
        description:
          "Uno studio internazionale sulla profilassi antibiotica: disegno dello studio, risorse per professionisti sanitari, informazioni per i pazienti e avanzamento.",
      },
      hero: {
        eyebrow: "Studio collaborativo internazionale",
        title: "Migliorare l'uso della profilassi antibiotica nel mondo",
        lead: "Sintesi segnaposto dello studio: obiettivo, popolazione e rilevanza. Questo testo verrà sostituito con quello definitivo.",
        primaryCta: "Leggi la pubblicazione",
        secondaryCta: "Lo studio",
      },
      audiences: {
        heading: "Trova le informazioni per te",
        healthcareProfessionals: {
          title: "Per i professionisti sanitari",
          description: "Protocollo, criteri di eleggibilità, raccolta dati e come aderire come centro.",
          cta: "Informazioni per i clinici",
        },
        patientsPublic: {
          title: "Per pazienti e cittadini",
          description: "Di cosa tratta lo studio, cosa significa per i pazienti e come vengono protetti i dati.",
          cta: "Informazioni per i pazienti",
        },
      },
      design: {
        heading: "Disegno dello studio",
        intro: "Introduzione segnaposto alla metodologia dello studio.",
        steps: [
          { title: "Centri eleggibili", description: "Segnaposto: quali ospedali possono partecipare." },
          { title: "Criteri di inclusione", description: "Segnaposto: quali pazienti vengono inclusi." },
          { title: "Follow-up", description: "Segnaposto: durata e modalità del follow-up." },
          { title: "Authorship collaborativa", description: "Segnaposto: come vengono riconosciuti i collaboratori." },
        ],
      },
      resources: {
        heading: "Risorse dello studio",
        protocol: {
          title: "Protocollo",
          description: "Protocollo completo e documenti di supporto.",
          cta: "Vedi il protocollo",
        },
        publication: {
          title: "Pubblicazione",
          description: "Risultati dello studio sottoposti a revisione paritaria.",
          cta: "Leggi l'articolo",
        },
        translations: {
          title: "Traduzioni",
          description: "Materiali dello studio disponibili in più lingue.",
          cta: "Sfoglia le traduzioni",
        },
      },
      quote: {
        text: "Citazione segnaposto sull'impatto dello studio e sulla forza della collaborazione globale.",
        author: "Nome Cognome",
        role: "Chief Investigator",
      },
      sponsors: {
        heading: "Con il supporto di",
        intro: "Lo studio è reso possibile dalle seguenti organizzazioni.",
      },
    },
    about: {
      seo: {
        title: "Lo Studio | Studio sulla Profilassi Antibiotica",
        description:
          "Contesto, obiettivi e comitato direttivo dello studio internazionale sulla profilassi antibiotica. Scopri perché lo studio è importante e chi lo guida.",
      },
      eyebrow: "Lo studio",
      title: "Informazioni sullo studio",
      lead: "Paragrafo introduttivo segnaposto sul contesto dello studio.",
      sections: [
        { heading: "Contesto", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Obiettivi", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Comitato direttivo", paragraphs: ["Paragrafo segnaposto."] },
      ],
    },
    healthcareProfessionals: {
      seo: {
        title: "Professionisti Sanitari | Studio sulla Profilassi Antibiotica",
        description:
          "Protocollo, eleggibilità, raccolta dati e authorship per i clinici e i centri che aderiscono allo studio internazionale sulla profilassi antibiotica.",
      },
      eyebrow: "Professionisti sanitari",
      title: "Informazioni per i professionisti sanitari",
      lead: "Paragrafo introduttivo segnaposto per clinici e referenti locali.",
      sections: [
        { heading: "Come aderire", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Criteri di eleggibilità", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Raccolta dati", paragraphs: ["Paragrafo segnaposto."] },
      ],
      dataCollectionCta: "Vai alla raccolta dati",
    },
    patientsPublic: {
      seo: {
        title: "Pazienti e Cittadini | Studio sulla Profilassi Antibiotica",
        description:
          "Informazioni in linguaggio semplice per pazienti e cittadini sullo studio sulla profilassi antibiotica, sulla partecipazione e sulla protezione dei dati.",
      },
      eyebrow: "Pazienti e cittadini",
      title: "Informazioni per pazienti e cittadini",
      lead: "Paragrafo introduttivo segnaposto in linguaggio semplice.",
      sections: [
        { heading: "Di cosa tratta lo studio?", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Cosa significa per me?", paragraphs: ["Paragrafo segnaposto."] },
        { heading: "Come vengono protetti i miei dati?", paragraphs: ["Paragrafo segnaposto."] },
      ],
    },
    studyProgress: {
      seo: {
        title: "Avanzamento | Studio sulla Profilassi Antibiotica",
        description:
          "Dati di reclutamento aggiornati dello studio sulla profilassi antibiotica: centri partecipanti, paesi e pazienti arruolati rispetto all'obiettivo.",
      },
      eyebrow: "Avanzamento",
      title: "Avanzamento dello studio",
      lead: "Paragrafo introduttivo segnaposto sullo stato del reclutamento.",
      sections: [{ heading: "Cronologia", paragraphs: ["Paragrafo segnaposto."] }],
      metricsHeading: "Il reclutamento in sintesi",
      lastUpdated: "Ultimo aggiornamento",
      ofTarget: "dell'obiettivo",
      metrics: {
        centres: "Centri partecipanti",
        countries: "Paesi",
        patients: "Pazienti arruolati",
      },
    },
  },
  notFound: {
    seo: {
      title: "Pagina non trovata | Studio sulla Profilassi Antibiotica",
      description: "La pagina che stai cercando non esiste o è stata spostata.",
    },
    title: "Pagina non trovata",
    lead: "La pagina che stai cercando non esiste o è stata spostata.",
    cta: "Torna alla home",
  },
};
