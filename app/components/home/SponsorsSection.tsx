import { Section } from "~/components/ui/Section";
import { SPONSORS } from "~/config/site";
import { useI18n } from "~/i18n";

export function SponsorsSection() {
  const { t } = useI18n();
  const { sponsors } = t.pages.home;

  return (
    <Section heading={sponsors.heading} intro={sponsors.intro}>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {SPONSORS.map((sponsor) => {
          const content = sponsor.logo ? (
            <img
              src={`${import.meta.env.BASE_URL}${sponsor.logo.replace(/^\//, "")}`}
              alt={sponsor.name}
              loading="lazy"
              className="max-h-12 w-auto object-contain"
            />
          ) : (
            <span className="text-sm font-medium text-fg-muted">{sponsor.name}</span>
          );

          return (
            <li
              key={sponsor.name}
              className="grid h-24 place-items-center rounded-xl border border-border bg-surface-raised p-4 text-center"
            >
              {sponsor.href ? (
                <a href={sponsor.href} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
