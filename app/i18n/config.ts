// Relative import on purpose: this module is also loaded by `app/routes.ts`.
import { normalizePath } from "../lib/path";

/**
 * Locale routing strategy:
 * - the default locale (English) lives at the root: /about/
 * - every other locale is prefixed: /it/about/
 */
export const LOCALES = ["en", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_DETAILS: Record<Locale, { nativeName: string; shortLabel: string; ogLocale: string }> = {
  en: { nativeName: "English", shortLabel: "EN", ogLocale: "en_GB" },
  it: { nativeName: "Italiano", shortLabel: "IT", ogLocale: "it_IT" },
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  return isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

/** "/it/about/" -> "/about/" */
export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  const segments = pathname.split("/").filter(Boolean);
  const withoutLocale = segments[0] === locale ? segments.slice(1) : segments;
  return normalizePath(withoutLocale.join("/"));
}

/** ("/about/", "it") -> "/it/about/" */
export function localizePath(path: string, locale: Locale): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : locale;
  return normalizePath(`${prefix}/${path}`);
}
