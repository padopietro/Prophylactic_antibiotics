import "@fontsource-variable/inter";
import "./app.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";

import type { Route } from "./+types/root";
import { SiteFooter } from "~/components/layout/SiteFooter";
import { SiteHeader } from "~/components/layout/SiteHeader";
import { SkipLink } from "~/components/layout/SkipLink";
import { NotFound } from "~/components/page/NotFound";
import { SITE } from "~/config/site";
import { getLocaleFromPathname } from "~/i18n";
import { THEME_INIT_SCRIPT } from "~/lib/theme";

export const MAIN_CONTENT_ID = "main-content";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.svg`, type: "image/svg+xml" },
  { rel: "manifest", href: `${import.meta.env.BASE_URL}site.webmanifest` },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const locale = getLocaleFromPathname(pathname);

  return (
    // The theme script may add the `dark` class before hydration.
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={SITE.themeColor} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SkipLink targetId={MAIN_CONTENT_ID} />
        <SiteHeader />
        <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

/** Unexpected errors fall back to the "not found" view instead of a blank page. */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (import.meta.env.DEV) console.error(error);
  return <NotFound />;
}
