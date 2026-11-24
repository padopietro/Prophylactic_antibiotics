import type { ReactNode } from "react";
import { Link } from "react-router";

import { Container } from "~/components/ui/Container";
import { useI18n } from "~/i18n";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}

/** Header of an inner page: visible breadcrumb, eyebrow, the page's single <h1> and lead. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  const { t, localize } = useI18n();

  return (
    <div className="relative overflow-hidden border-b border-border bg-surface-muted">
      <DecorativeGlow />
      <Container className="relative py-16 sm:py-20">
        <nav aria-label={t.common.breadcrumb} className="mb-6 text-sm text-fg-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link to={localize("/")} className="hover:text-fg">
                {t.nav.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-fg">
              {eyebrow}
            </li>
          </ol>
        </nav>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-fg-muted">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </div>
  );
}

export function DecorativeGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -right-24 size-96 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-600/20" />
      <div className="absolute -bottom-40 -left-24 size-80 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-700/15" />
    </div>
  );
}
