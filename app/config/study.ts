/**
 * Study facts used for the progress page and structured data (schema.org MedicalStudy).
 * Labels are translated in the dictionaries; only data lives here.
 *
 * TODO(content): replace placeholder figures with real ones.
 */

export type StudyMetricId = "centres" | "countries" | "patients";

export interface StudyMetric {
  id: StudyMetricId;
  current: number;
  target: number;
}

export const STUDY = {
  /** schema.org MedicalStudyStatus: ActiveNotRecruiting | Completed | EnrollingByInvitation | NotYetRecruiting | Recruiting | ResultsAvailable | Suspended | Terminated | Withdrawn */
  status: "Recruiting",
  /** ISO date (YYYY-MM-DD) of the last progress update. */
  lastUpdated: "2026-11-24",
  healthCondition: "Surgical site infection",
  studySubject: "Antibiotic prophylaxis",
  metrics: [
    { id: "centres", current: 42, target: 100 },
    { id: "countries", current: 12, target: 30 },
    { id: "patients", current: 1250, target: 5000 },
  ] satisfies StudyMetric[],
} as const;
