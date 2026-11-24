import { DecorativeGlow } from "~/components/page/PageHero";
import { ButtonLink } from "~/components/ui/ButtonLink";
import { Container } from "~/components/ui/Container";
import { getPagePath } from "~/config/pages";
import { EXTERNAL_LINKS } from "~/config/site";
import { STUDY } from "~/config/study";
import { useI18n } from "~/i18n";
import { formatNumber } from "~/lib/format";

export function HomeHero() {
  const { t, locale, localize } = useI18n();
  const { hero } = t.pages.home;

  return (
    <div className="relative overflow-hidden border-b border-border">
      <DecorativeGlow />
      <GridPattern />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-100">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">{hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-fg-muted sm:text-xl">{hero.lead}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={EXTERNAL_LINKS.publication}>{hero.primaryCta}</ButtonLink>
          <ButtonLink href={localize(getPagePath("about"))} variant="secondary">
            {hero.secondaryCta}
          </ButtonLink>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8">
          {STUDY.metrics.map((metric) => (
            <div key={metric.id}>
              <dt className="text-sm text-fg-muted">{t.pages.studyProgress.metrics[metric.id]}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                {formatNumber(metric.current, locale)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}

function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full [mask-image:radial-gradient(70%_60%_at_70%_20%,white,transparent)] stroke-border/60"
    >
      <defs>
        <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" strokeWidth="0" />
    </svg>
  );
}
