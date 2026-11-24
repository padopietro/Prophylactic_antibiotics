import type { ReactNode } from "react";

import { cn } from "~/lib/cn";
import { isExternalUrl } from "~/lib/url";

import { ArrowRightIcon, ExternalIcon } from "./icons";
import { SmartLink } from "./SmartLink";

const VARIANTS = {
  primary:
    "bg-brand-600 text-white shadow-sm hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400 dark:text-brand-900",
  secondary:
    "border border-border bg-surface-raised text-fg hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200",
} as const;

interface ButtonLinkProps {
  href: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  const TrailingIcon = isExternalUrl(href) ? ExternalIcon : ArrowRightIcon;

  return (
    <SmartLink
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      <TrailingIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </SmartLink>
  );
}
