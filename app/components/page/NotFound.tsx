import { ButtonLink } from "~/components/ui/ButtonLink";
import { Container } from "~/components/ui/Container";
import { useI18n } from "~/i18n";

export function NotFound() {
  const { t, localize } = useI18n();

  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{t.notFound.title}</h1>
      <p className="mt-6 max-w-xl text-lg text-fg-muted">{t.notFound.lead}</p>
      <ButtonLink href={localize("/")} className="mt-10">
        {t.notFound.cta}
      </ButtonLink>
    </Container>
  );
}
