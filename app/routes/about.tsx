import type { Route } from "./+types/about";
import { ContentPage } from "~/components/page/ContentPage";
import { useI18n } from "~/i18n";
import { pageMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => pageMeta("about", location.pathname);

export default function About() {
  const { t } = useI18n();
  return <ContentPage copy={t.pages.about} />;
}
