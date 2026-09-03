import { useState } from "react";

import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";
import { allSeries, findRegion, regionName, toCyrillicPlate } from "@/lib/plates";

export function RegionPage({ lang, code }: { lang: Lang; code: string }) {
  const base = lang === "uk" ? "" : "/ru";
  const region = findRegion(code);
  const seriesList = allSeries();
  const [number, setNumber] = useState("0001");
  const digits = /^\d{4}$/.test(number) ? number : "0001";

  return (
    <SiteLayout
      lang={lang}
      altHref={lang === "uk" ? `/ru/region/${code}` : `/region/${code}`}
      breadcrumbs={[
        { label: t("siteName", lang), href: `${base || "/"}` },
        { label: t("navRegions", lang), href: `${base}/#regions` },
        { label: `${code} — ${regionName(region, lang)}` },
      ]}
    >
      <section className="panel flex flex-wrap items-center gap-4 px-5 py-6 sm:px-8">
        <span className="plate-face flex h-16 w-24 items-center justify-center text-3xl">
          {region?.cyr ?? toCyrillicPlate(code)}
        </span>
        <div>
          <h1 className="text-2xl sm:text-3xl">{regionName(region, lang)}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("regionCode2004", lang)}: {region?.code ?? code}
            {region?.code2013 ? ` • ${t("regionCode2013", lang)}: ${region.code2013}` : ""}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">{t("seriesTitle", lang)}</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("seriesLead", lang)}</p>

        <label className="mt-4 flex max-w-xs flex-col gap-1 text-xs text-muted-foreground">
          {t("numberLabel", lang)}
          <input
            inputMode="numeric"
            maxLength={4}
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/\D/g, "").slice(0, 4))}
            className="plate-face h-11 px-3 text-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-8">
          {seriesList.map((s) => (
            <li key={s}>
              <a
                href={`${base}/nomer/${region?.code ?? code}${digits}${s}`}
                className="chip chip-hover block px-1 py-2 text-center text-sm"
              >
                {toCyrillicPlate(s)}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
