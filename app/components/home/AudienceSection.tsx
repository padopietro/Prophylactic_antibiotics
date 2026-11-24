import { Section } from "~/components/ui/Section";
import { LinkCard } from "~/components/ui/LinkCard";
import { getPagePath } from "~/config/pages";
import { useI18n } from "~/i18n";

export function AudienceSection() {
  const { t, localize } = useI18n();
  const { audiences } = t.pages.home;

  return (
    <Section heading={audiences.heading}>
      <div className="grid gap-6 md:grid-cols-2">
        <LinkCard
          href={localize(getPagePath("healthcareProfessionals"))}
          copy={audiences.healthcareProfessionals}
          className="p-8 md:min-h-56"
        />
        <LinkCard
          href={localize(getPagePath("patientsPublic"))}
          copy={audiences.patientsPublic}
          className="p-8 md:min-h-56"
        />
      </div>
    </Section>
  );
}
