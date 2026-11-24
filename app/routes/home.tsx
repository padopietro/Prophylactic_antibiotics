import type { Route } from "./+types/home";
import { AudienceSection } from "~/components/home/AudienceSection";
import { HomeHero } from "~/components/home/HomeHero";
import { QuoteSection } from "~/components/home/QuoteSection";
import { ResourcesSection } from "~/components/home/ResourcesSection";
import { SponsorsSection } from "~/components/home/SponsorsSection";
import { StudyDesignSection } from "~/components/home/StudyDesignSection";
import { pageMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => pageMeta("home", location.pathname);

export default function Home() {
  return (
    <>
      <HomeHero />
      <AudienceSection />
      <StudyDesignSection />
      <ResourcesSection />
      <QuoteSection />
      <SponsorsSection />
    </>
  );
}
