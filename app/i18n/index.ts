import { useLocation } from "react-router";

import { type Locale, getLocaleFromPathname, localizePath } from "./config";
import { en } from "./dictionaries/en";
import { it } from "./dictionaries/it";
import type { Dictionary } from "./types";

export * from "./config";
export type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, it };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Current locale (derived from the URL), its dictionary and a path localiser. */
export function useI18n() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPathname(pathname);

  return {
    locale,
    t: getDictionary(locale),
    localize: (path: string) => localizePath(path, locale),
  };
}
