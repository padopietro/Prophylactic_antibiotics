import type { ReactNode } from "react";

import type { ContentPageCopy } from "~/i18n/types";

import { ContentSections } from "./ContentSections";
import { PageHero } from "./PageHero";

interface ContentPageProps {
  copy: ContentPageCopy;
  heroActions?: ReactNode;
  children?: ReactNode;
}

/** Standard layout for an inner text page: hero, optional extra blocks, text sections. */
export function ContentPage({ copy, heroActions, children }: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead}>
        {heroActions}
      </PageHero>
      {children}
      <ContentSections sections={copy.sections} />
    </>
  );
}
