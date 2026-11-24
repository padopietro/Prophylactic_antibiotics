import { MoonIcon, SunIcon } from "~/components/ui/icons";
import { useI18n } from "~/i18n";
import { useTheme } from "~/lib/theme";

export function ThemeToggle() {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? t.common.switchToLightTheme : t.common.switchToDarkTheme;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
