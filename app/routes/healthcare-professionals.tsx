import type { Route } from "./+types/healthcare-professionals";
import { ContentPage } from "~/components/page/ContentPage";
import { ButtonLink } from "~/components/ui/ButtonLink";
import { EXTERNAL_LINKS } from "~/config/site";
import { useI18n } from "~/i18n";
import { pageMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => pageMeta("healthcareProfessionals", location.pathname);

export default function HealthcareProfessionals() {
  const { t } = useI18n();
  const copy = t.pages.healthcareProfessionals;

  return (
    <ContentPage
      copy={copy}
      heroActions={<ButtonLink href={EXTERNAL_LINKS.dataCollection}>{copy.dataCollectionCta}</ButtonLink>}
    />
  );
}
