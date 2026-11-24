import { Link, useLocation } from "react-router";

import { GlobeIcon } from "~/components/ui/icons";
import { LOCALE_DETAILS, LOCALES, localizePath, stripLocale, useI18n } from "~/i18n";
import { cn } from "~/lib/cn";

/** Links to the current page in every available language. */
export function LanguageSwitcher() {
  const { locale: currentLocale, t } = useI18n();
  const { pathname } = useLocation();
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <nav aria-label={t.common.changeLanguage} className="flex items-center gap-1">
      <GlobeIcon className="size-4 text-fg-muted" />
      <ul className="flex items-center rounded-full border border-border p-0.5">
        {LOCALES.map((locale) => {
          const isCurrent = locale === currentLocale;
          const { nativeName, shortLabel } = LOCALE_DETAILS[locale];

          return (
            <li key={locale}>
              <Link
                to={localizePath(pathWithoutLocale, locale)}
                hrefLang={locale}
                lang={locale}
                aria-current={isCurrent ? "true" : undefined}
                title={nativeName}
                className={cn(
                  "block rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                  isCurrent
                    ? "bg-brand-600 text-white dark:bg-brand-500 dark:text-brand-900"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                <span aria-hidden="true">{shortLabel}</span>
                <span className="sr-only">{nativeName}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
