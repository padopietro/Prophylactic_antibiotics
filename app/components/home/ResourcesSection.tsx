import { Section } from "~/components/ui/Section";
import { LinkCard } from "~/components/ui/LinkCard";
import { EXTERNAL_LINKS } from "~/config/site";
import { useI18n } from "~/i18n";

const RESOURCES = ["protocol", "publication", "translations"] as const;

export function ResourcesSection() {
  const { t } = useI18n();
  const { resources } = t.pages.home;

  return (
    <Section heading={resources.heading}>
      <div className="grid gap-6 md:grid-cols-3">
        {RESOURCES.map((resource) => (
          <LinkCard
            key={resource}
            href={EXTERNAL_LINKS[resource]}
            copy={resources[resource]}
            disabledLabel={t.common.comingSoon}
          />
        ))}
      </div>
    </Section>
  );
}
