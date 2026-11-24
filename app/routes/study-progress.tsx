import type { Route } from "./+types/study-progress";
import { ContentPage } from "~/components/page/ContentPage";
import { StudyMetrics } from "~/components/study/StudyMetrics";
import { useI18n } from "~/i18n";
import { pageMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => pageMeta("studyProgress", location.pathname);

export default function StudyProgress() {
  const { t } = useI18n();

  return (
    <ContentPage copy={t.pages.studyProgress}>
      <StudyMetrics />
    </ContentPage>
  );
}
