import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { PlateBadge } from "@/components/PlateBadge";
import { PlateSearch } from "@/components/PlateSearch";
import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, fieldLabel, t } from "@/lib/i18n";
import { lookupPlate } from "@/lib/plate-lookup.functions";
import { findRegion, parsePlate, regionName, toCyrillicPlate } from "@/lib/plates";

export function PlatePage({ lang, plate }: { lang: Lang; plate: string }) {
  const base = lang === "uk" ? "" : "/ru";
  const parsed = parsePlate(plate);
  const region = findRegion(parsed?.regionCode ?? "");
  const fetchPlate = useServerFn(lookupPlate);

  const { data, isLoading } = useQuery({
    queryKey: ["plate", plate],
    queryFn: () => fetchPlate({ data: { plate } }),
    staleTime: 5 * 60 * 1000,
  });

  return (
    <SiteLayout
      lang={lang}
      altHref={lang === "uk" ? `/ru/nomer/${plate}` : `/nomer/${plate}`}
      breadcrumbs={[
        { label: t("siteName", lang), href: `${base || "/"}` },
        ...(region
          ? [{ label: regionName(region, lang), href: `${base}/region/${region.code}` }]
          : []),
        { label: toCyrillicPlate(plate) },
      ]}
    >
      <section className="panel px-5 py-6 sm:px-8 sm:py-8">
        <PlateBadge plate={plate} size="lg" />
        <h1 className="mt-4 text-2xl sm:text-3xl">
          {lang === "uk"
            ? `Номерний знак ${toCyrillicPlate(plate)} — дані МВС України`
            : `Номерной знак ${toCyrillicPlate(plate)} — данные МВД Украины`}
        </h1>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-muted-foreground uppercase">{t("region", lang)}</dt>
            <dd className="font-semibold">{regionName(region, lang)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground uppercase">{t("number", lang)}</dt>
            <dd className="font-semibold">{parsed?.number ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground uppercase">{t("series", lang)}</dt>
            <dd className="font-semibold">{toCyrillicPlate(parsed?.series ?? "")}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">{t("operations", lang)}</h2>

        {isLoading && (
          <div className="panel mt-4 animate-pulse px-5 py-8 text-sm text-muted-foreground">
            {t("loading", lang)}
          </div>
        )}

        {!isLoading && data?.error && (
          <p className="panel mt-4 px-5 py-6 text-sm text-muted-foreground">
            {t("sourceError", lang)}
          </p>
        )}

        {!isLoading && data && !data.error && !data.found && (
          <p className="panel mt-4 px-5 py-6 text-sm text-muted-foreground">
            {t("notFound", lang)}
          </p>
        )}

        {!isLoading && data?.found && (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("operationsCount", lang)}: {data.operations.length}
            </p>
            <div className="mt-4 space-y-4">
              {data.operations.map((op, i) => (
                <dl key={i} className="panel divide-y divide-border px-5 py-2 text-sm">
                  {op.fields.map((f, j) => (
                    <div key={j} className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4">
                      <dt className="text-xs text-muted-foreground uppercase">
                        {fieldLabel(f.key, lang)}
                      </dt>
                      <dd className={f.key === "plate" ? "font-plate text-lg" : "font-medium"}>
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ))}
            </div>
          </>
        )}
      </section>

      {!!data?.variants.length && (
        <section className="mt-8">
          <h2 className="text-2xl">{t("variantsTitle", lang)}</h2>
          <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
            {data.variants.map((v) => (
              <li key={v}>
                <a
                  href={`${base}/nomer/${v}`}
                  className="chip chip-hover block px-1 py-2 text-center text-xs"
                >
                  {toCyrillicPlate(v)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="panel mt-8 px-5 py-6 sm:px-8">
        <h2 className="text-xl">{t("searchTitle", lang)}</h2>
        <div className="mt-4 max-w-xl">
          <PlateSearch lang={lang} />
        </div>
      </section>
    </SiteLayout>
  );
}
