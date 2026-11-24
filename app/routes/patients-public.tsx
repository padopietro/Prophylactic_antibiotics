import type { Route } from "./+types/patients-public";
import { ContentPage } from "~/components/page/ContentPage";
import { useI18n } from "~/i18n";
import { pageMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => pageMeta("patientsPublic", location.pathname);

export default function PatientsPublic() {
  const { t } = useI18n();
  return <ContentPage copy={t.pages.patientsPublic} />;
}
