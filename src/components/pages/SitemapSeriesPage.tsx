import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";
import { allSeries, findRegion, regionName, toCyrillicPlate } from "@/lib/plates";

export function SitemapSeriesPage({ lang, code }: { lang: Lang; code: string }) {
  const base = lang === "uk" ? "" : "/ru";
  const region = findRegion(code);
  const seriesList = allSeries();

  if (!region) {
    return (
      <SiteLayout lang={lang} altHref={lang === "uk" ? `/ru/sitemap` : `/sitemap`}>
        <div className="p-8 text-center text-xl">Region not found</div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout
      lang={lang}
      altHref={lang === "uk" ? `/ru/sitemap/${code}` : `/sitemap/${code}`}
      breadcrumbs={[
        { label: t("siteName", lang), href: `${base || "/"}` },
        { label: t("sitemap", lang), href: `${base}/sitemap` },
        { label: regionName(region, lang) },
      ]}
    >
      <section className="panel px-5 py-6 sm:px-8">
        <h1 className="text-2xl sm:text-3xl">
          {t("sitemap", lang)} - {regionName(region, lang)}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {lang === "uk" 
            ? "Оберіть серію (літерне закінчення), щоб переглянути всі 9999 номерних знаків цієї серії."
            : "Выберите серию (буквенное окончание), чтобы просмотреть все 9999 номерных знаков этой серии."}
        </p>

        <ul className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-8">
          {seriesList.map((s) => (
            <li key={s}>
              <a
                href={`${base}/sitemap/${code}/${s}`}
                className="chip chip-hover block px-1 py-3 text-center text-sm font-bold"
              >
                ** {toCyrillicPlate(s)}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
