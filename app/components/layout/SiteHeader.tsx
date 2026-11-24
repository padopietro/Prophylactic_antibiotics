import { useState } from "react";
import { Link } from "react-router";

import { Container } from "~/components/ui/Container";
import { CloseIcon, MenuIcon } from "~/components/ui/icons";
import { SITE } from "~/config/site";
import { useI18n } from "~/i18n";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

const MOBILE_NAV_ID = "mobile-navigation";

export function SiteHeader() {
  const { t, localize } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to={localize("/")} onClick={closeMenu} className="flex items-center gap-2.5 font-semibold">
          <Logo className="size-8" />
          <span className="text-lg tracking-tight">{SITE.shortName}</span>
          <span className="sr-only">– {SITE.name}</span>
        </Link>

        <nav aria-label={t.common.mainNavigation} className="hidden lg:block">
          <NavLinks orientation="horizontal" />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-fg-muted hover:bg-surface-muted hover:text-fg lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label={isMenuOpen ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id={MOBILE_NAV_ID}
          aria-label={t.common.mainNavigation}
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="py-3">
            <NavLinks orientation="vertical" onNavigate={closeMenu} />
          </Container>
        </nav>
      )}
    </header>
  );
}
