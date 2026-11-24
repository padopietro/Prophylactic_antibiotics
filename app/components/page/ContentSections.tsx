import { Container } from "~/components/ui/Container";
import type { TextSection } from "~/i18n/types";

/** Long-form text sections with a readable measure and a proper heading outline (h2). */
export function ContentSections({ sections }: { sections: TextSection[] }) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl space-y-14">
        {sections.map((section) => (
          <section key={section.heading} className="reveal">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-fg-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
