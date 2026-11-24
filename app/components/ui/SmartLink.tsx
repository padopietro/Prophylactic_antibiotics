import type { ReactNode } from "react";
import { Link } from "react-router";

import { useI18n } from "~/i18n";
import { isExternalUrl } from "~/lib/url";

interface SmartLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * Renders a client-side <Link> for internal paths and a plain <a> for
 * external URLs (with an accessible hint that the link leaves the site).
 */
export function SmartLink({ href, className, children }: SmartLinkProps) {
  const { t } = useI18n();

  if (isExternalUrl(href)) {
    return (
      <a href={href} className={className} rel="noopener noreferrer">
        {children}
        <span className="sr-only"> {t.common.externalLink}</span>
      </a>
    );
  }

  return (
    <Link to={href} className={className} prefetch="intent">
      {children}
    </Link>
  );
}
