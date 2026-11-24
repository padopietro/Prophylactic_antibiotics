import { Section } from "~/components/ui/Section";
import { STUDY } from "~/config/study";
import { useI18n } from "~/i18n";
import { formatDate, formatNumber, formatPercent } from "~/lib/format";

/** Recruitment figures with accessible progress bars. */
export function StudyMetrics() {
  const { t, locale } = useI18n();
  const copy = t.pages.studyProgress;

  return (
    <Section heading={copy.metricsHeading} tone="muted">
      <ul className="grid gap-6 md:grid-cols-3">
        {STUDY.metrics.map((metric) => {
          const ratio = Math.min(metric.current / metric.target, 1);
          const label = copy.metrics[metric.id];

          return (
            <li key={metric.id} className="reveal rounded-2xl border border-border bg-surface-raised p-6">
              <p className="text-sm font-medium text-fg-muted">{label}</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight tabular-nums">
                {formatNumber(metric.current, locale)}
                <span className="text-lg font-normal text-fg-muted"> / {formatNumber(metric.target, locale)}</span>
              </p>
              <div
                role="progressbar"
                aria-label={label}
                aria-valuemin={0}
                aria-valuemax={metric.target}
                aria-valuenow={metric.current}
                className="mt-5 h-2 overflow-hidden rounded-full bg-surface-muted"
              >
                <div className="h-full rounded-full bg-brand-500" style={{ width: `${ratio * 100}%` }} />
              </div>
              <p className="mt-2 text-sm text-fg-muted">
                {formatPercent(ratio, locale)} {copy.ofTarget}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-sm text-fg-muted">
        {copy.lastUpdated}: <time dateTime={STUDY.lastUpdated}>{formatDate(STUDY.lastUpdated, locale)}</time>
      </p>
    </Section>
  );
}
