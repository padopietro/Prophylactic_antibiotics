import { Link } from "react-router";

import { Container } from "~/components/ui/Container";
import { MailIcon, PhoneIcon } from "~/components/ui/icons";
import { PAGES } from "~/config/pages";
import { CONTACT, SITE, SOCIAL_LINKS } from "~/config/site";
import { useI18n } from "~/i18n";

import { Logo } from "./Logo";

const headingClass = "text-sm font-semibold tracking-wide text-fg uppercase";
const linkClass = "text-fg-muted transition-colors hover:text-brand-700 dark:hover:text-brand-300";

export function SiteFooter() {
  const { t, localize } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="flex items-center gap-2.5 font-semibold">
            <Logo className="size-8" />
            {SITE.name}
          </p>
          <p className="mt-4 max-w-sm text-sm text-fg-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.navigationHeading}>
          <h2 className={headingClass}>{t.footer.navigationHeading}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {PAGES.map((page) => (
              <li key={page.id}>
                <Link to={localize(page.path)} className={linkClass}>
                  {t.nav[page.id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>{t.footer.contactHeading}</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p className="text-fg-muted">
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a href={`mailto:${CONTACT.email}`} className={`flex items-center gap-2 ${linkClass}`}>
              <MailIcon className="size-4" />
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className={`flex items-center gap-2 ${linkClass}`}>
              <PhoneIcon className="size-4" />
              {CONTACT.phone}
            </a>
          </address>

          {SOCIAL_LINKS.length > 0 && (
            <>
              <h2 className={`${headingClass} mt-8`}>{t.footer.followHeading}</h2>
              <ul className="mt-4 flex gap-4 text-sm">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} rel="noopener noreferrer me" className={linkClass}>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-fg-muted sm:flex-row sm:justify-between">
        <p>
          © {year} {SITE.name}. {t.footer.rights}
        </p>
        <a href="#top" className={linkClass}>
          {t.common.backToTop} ↑
        </a>
      </Container>
    </footer>
  );
}
