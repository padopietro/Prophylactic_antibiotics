import { NavLink } from "react-router";

import { PAGES } from "~/config/pages";
import { useI18n } from "~/i18n";
import { cn } from "~/lib/cn";

interface NavLinksProps {
  orientation: "horizontal" | "vertical";
  onNavigate?: () => void;
}

export function NavLinks({ orientation, onNavigate }: NavLinksProps) {
  const { t, localize } = useI18n();

  return (
    <ul className={cn("flex", orientation === "horizontal" ? "items-center gap-1" : "flex-col gap-1")}>
      {PAGES.map((page) => (
        <li key={page.id}>
          <NavLink
            to={localize(page.path)}
            end
            prefetch="intent"
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "block rounded-full px-3 py-2 text-sm font-medium transition-colors",
                orientation === "vertical" && "rounded-lg px-4 py-3 text-base",
                isActive
                  ? "bg-brand-50 text-brand-800 dark:bg-brand-900/60 dark:text-brand-100"
                  : "text-fg-muted hover:bg-surface-muted hover:text-fg",
              )
            }
          >
            {t.nav[page.id]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
