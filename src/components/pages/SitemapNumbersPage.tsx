import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";
import { findRegion, regionName, toCyrillicPlate } from "@/lib/plates";

export function SitemapNumbersPage({
  lang,
  code,
  series,
}: {
  lang: Lang;
  code: string;
  series: string;
}) {
  const base = lang === "uk" ? "" : "/ru";
  const region = findRegion(code);

  if (!region) {
    return (
      <SiteLayout lang={lang} altHref={lang === "uk" ? `/ru/sitemap` : `/sitemap`}>
        <div className="p-8 text-center text-xl">Region not found</div>
      </SiteLayout>
    );
  }

  // Generate numbers from 0001 to 9999
  const numbers = Array.from({ length: 9999 }, (_, i) => String(i + 1).padStart(4, "0"));

  return (
    <SiteLayout
      lang={lang}
      altHref={lang === "uk" ? `/ru/sitemap/${code}/${series}` : `/sitemap/${code}/${series}`}
      breadcrumbs={[
        { label: t("siteName", lang), href: `${base || "/"}` },
        { label: t("sitemap", lang), href: `${base}/sitemap` },
        { label: regionName(region, lang), href: `${base}/sitemap/${code}` },
        { label: `${toCyrillicPlate(code)} **** ${toCyrillicPlate(series)}` },
      ]}
    >
      <section className="panel px-5 py-6 sm:px-8">
        <h1 className="text-2xl sm:text-3xl">
          {toCyrillicPlate(code)} 0001-9999 {toCyrillicPlate(series)}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {lang === "uk"
            ? `Усі номерні знаки регіону ${regionName(region, lang)} серії ${toCyrillicPlate(series)}.`
            : `Все номерные знаки региона ${regionName(region, lang)} серии ${toCyrillicPlate(series)}.`}
        </p>

        {/* Using CSS grid for high-density fast rendering */}
        <div className="mt-6 grid grid-cols-4 gap-x-2 gap-y-1 text-sm sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
          {numbers.map((num) => {
            const plate = `${code}${num}${series}`;
            const displayPlate = `${toCyrillicPlate(code)} ${num} ${toCyrillicPlate(series)}`;
            return (
              <a
                key={plate}
                href={`${base}/nomer/${plate}`}
                className="hover:text-primary hover:underline text-muted-foreground"
              >
                {displayPlate}
              </a>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
