import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";
import { REGIONS, regionName } from "@/lib/plates";

export function SitemapRegionsPage({ lang }: { lang: Lang }) {
  const base = lang === "uk" ? "" : "/ru";

  return (
    <SiteLayout
      lang={lang}
      altHref={lang === "uk" ? `/ru/sitemap` : `/sitemap`}
      breadcrumbs={[
        { label: t("siteName", lang), href: `${base || "/"}` },
        { label: t("sitemap", lang) },
      ]}
    >
      <section className="panel px-5 py-6 sm:px-8">
        <h1 className="text-2xl sm:text-3xl">{t("sitemap", lang)} - {t("regionsTitle", lang)}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {lang === "uk" 
            ? "Оберіть регіон, щоб переглянути всі доступні серії номерних знаків."
            : "Выберите регион, чтобы просмотреть все доступные серии номерных знаков."}
        </p>
        
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <li key={r.code}>
              <a
                href={`${base}/sitemap/${r.code}`}
                className="panel flex h-full items-center gap-3 px-3 py-3 transition-colors hover:border-primary"
              >
                <span className="plate-face flex h-11 w-14 shrink-0 items-center justify-center text-xl">
                  {r.cyr}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">
                    {regionName(r, lang)}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t("regionCode2004", lang)}: {r.code}
                    {r.code2013 ? ` • ${t("regionCode2013", lang)}: ${r.code2013}` : ""}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
