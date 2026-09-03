import type { ReactNode } from "react";

import { type Lang, t } from "@/lib/i18n";

export function SiteLayout({
  lang,
  children,
  breadcrumbs,
  altHref,
}: {
  lang: Lang;
  children: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  altHref: string;
}) {
  const base = lang === "uk" ? "" : "/ru";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-card/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
          <a
            href={`${base || "/"}`}
            className="font-plate text-lg font-semibold tracking-[0.14em] text-primary"
          >
            {t("siteName", lang)}
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={`${base || "/"}`} className="transition-colors hover:text-primary">
              {t("navHome", lang)}
            </a>
            <a href={`${base}/#regions`} className="transition-colors hover:text-primary">
              {t("navRegions", lang)}
            </a>
            <a href={`${base}/#about`} className="transition-colors hover:text-primary">
              {t("navAbout", lang)}
            </a>
          </nav>
          <a
            href={altHref}
            className="chip chip-hover ml-auto px-2.5 py-1 text-xs text-muted-foreground"
            hrefLang={lang === "uk" ? "ru" : "uk"}
          >
            {t("langSwitch", lang)}
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        {breadcrumbs?.length ? (
          <nav className="mb-5 text-xs text-muted-foreground">
            {t("breadcrumb", lang)}:{" "}
            {breadcrumbs.map((b, i) => (
              <span key={`${b.label}-${i}`}>
                {i > 0 && <span className="px-1 text-border">❭</span>}
                {b.href ? (
                  <a href={b.href} className="hover:text-primary">
                    {b.label}
                  </a>
                ) : (
                  <span className="text-foreground">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {children}
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl space-y-2 px-4 py-6 text-xs text-muted-foreground">
          <p>{t("disclaimer", lang)}</p>
          <p>
            © 2026 {t("siteName", lang)} — {t("footer", lang)}
          </p>
        </div>
      </footer>
    </div>
  );
}
