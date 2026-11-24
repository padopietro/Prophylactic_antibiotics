import { Section } from "~/components/ui/Section";
import { useI18n } from "~/i18n";

export function StudyDesignSection() {
  const { t } = useI18n();
  const { design } = t.pages.home;

  return (
    <Section heading={design.heading} intro={design.intro} tone="muted">
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {design.steps.map((step, index) => (
          <li key={step.title} className="reveal rounded-2xl border border-border bg-surface-raised p-6">
            <span className="text-sm font-semibold text-brand-600 tabular-nums dark:text-brand-300" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-fg-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
