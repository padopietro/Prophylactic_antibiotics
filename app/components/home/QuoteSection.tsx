import { Container } from "~/components/ui/Container";
import { useI18n } from "~/i18n";

export function QuoteSection() {
  const { t } = useI18n();
  const { quote } = t.pages.home;

  return (
    <section className="bg-brand-800 py-20 text-white sm:py-28 dark:bg-brand-900">
      <Container>
        <figure className="reveal mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            <p>“{quote.text}”</p>
          </blockquote>
          <figcaption className="mt-8 text-brand-100">
            <span className="font-semibold text-white">{quote.author}</span> · {quote.role}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
