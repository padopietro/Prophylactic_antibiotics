import { useId, type ReactNode } from "react";

import { cn } from "~/lib/cn";

import { Container } from "./Container";

interface SectionProps {
  heading: string;
  intro?: string;
  /** Visually hide the heading while keeping it for screen readers and SEO outline. */
  hideHeading?: boolean;
  tone?: "default" | "muted";
  className?: string;
  children: ReactNode;
}

/** A labelled page region with a consistent heading style and vertical rhythm. */
export function Section({ heading, intro, hideHeading = false, tone = "default", className, children }: SectionProps) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={cn("py-16 sm:py-24", tone === "muted" && "bg-surface-muted", className)}
    >
      <Container>
        <header className={cn("mb-10 max-w-2xl", hideHeading && "sr-only")}>
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {heading}
          </h2>
          {intro && <p className="mt-4 text-lg text-pretty text-fg-muted">{intro}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
}
