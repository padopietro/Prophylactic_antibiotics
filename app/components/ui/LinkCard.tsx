import type { ReactNode } from "react";

import type { LinkCardCopy } from "~/i18n/types";
import { cn } from "~/lib/cn";
import { isExternalUrl } from "~/lib/url";

import { ArrowRightIcon, ExternalIcon } from "./icons";
import { SmartLink } from "./SmartLink";

interface LinkCardProps {
  href: string;
  copy: LinkCardCopy;
  /** Placeholder links ("#") render as a non-interactive card. */
  disabledLabel?: string;
  icon?: ReactNode;
  className?: string;
}

/**
 * A card whose whole surface is clickable. The link wraps only the title
 * (good for screen readers) and is stretched over the card with a pseudo-element.
 */
export function LinkCard({ href, copy, disabledLabel, icon, className }: LinkCardProps) {
  const isPlaceholder = href === "#";
  const TrailingIcon = isExternalUrl(href) ? ExternalIcon : ArrowRightIcon;

  return (
    <article
      className={cn(
        "reveal group relative flex flex-col rounded-2xl border border-border bg-surface-raised p-6 transition",
        !isPlaceholder && "hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-lg",
        className,
      )}
    >
      {icon && <div className="mb-4 text-brand-600 dark:text-brand-300">{icon}</div>}
      <h3 className="text-lg font-semibold">
        {isPlaceholder ? (
          copy.title
        ) : (
          <SmartLink href={href} className="after:absolute after:inset-0 after:rounded-2xl">
            {copy.title}
          </SmartLink>
        )}
      </h3>
      <p className="mt-2 flex-1 text-fg-muted">{copy.description}</p>
      <p
        className={cn(
          "mt-6 inline-flex items-center gap-2 text-sm font-semibold",
          isPlaceholder ? "text-fg-muted" : "text-brand-700 dark:text-brand-300",
        )}
        aria-hidden="true"
      >
        {isPlaceholder ? disabledLabel : copy.cta}
        {!isPlaceholder && <TrailingIcon className="size-4 transition-transform group-hover:translate-x-0.5" />}
      </p>
    </article>
  );
}
