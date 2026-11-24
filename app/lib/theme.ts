import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Inlined in <head> so the correct theme is applied before first paint
 * (no flash of the wrong theme). Falls back to the OS preference.
 */
export const THEME_INIT_SCRIPT = `(() => {
  try {
    const stored = localStorage.getItem("${STORAGE_KEY}");
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", stored ? stored === "dark" : prefersDark);
  } catch {}
})();`;

function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function useTheme() {
  // The server snapshot is used for pre-rendering and hydration; the real
  // theme is read right after, avoiding hydration mismatches.
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => "light");

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return { theme, toggleTheme };
}
