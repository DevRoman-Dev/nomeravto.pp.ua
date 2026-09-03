import { PlateBadge } from "@/components/PlateBadge";
import { PlateSearch } from "@/components/PlateSearch";
import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";
import { REGIONS, regionName } from "@/lib/plates";

const SAMPLES = ["BC4061TA", "AA1234BI", "AX7777IE", "KA0001AA"];

export function HomePage({ lang }: { lang: Lang }) {
  const base = lang === "uk" ? "" : "/ru";
  const alt = lang === "uk" ? "/ru" : "/";

  return (
    <SiteLayout lang={lang} altHref={alt}>
      <section className="panel px-5 py-7 sm:px-8 sm:py-10">
        <p className="font-plate text-xs tracking-[0.28em] text-muted-foreground uppercase">
          {t("tagline", lang)}
        </p>
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{t("searchTitle", lang)}</h1>
        <div className="mt-6 max-w-2xl">
          <PlateSearch lang={lang} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {SAMPLES.map((p) => (
            <a key={p} href={`${base}/nomer/${p}`} className="transition-transform hover:-translate-y-0.5">
              <PlateBadge plate={p} size="sm" />
            </a>
          ))}
        </div>
      </section>

      <section id="regions" className="mt-8 scroll-mt-24">
        <h2 className="text-2xl">{t("regionsTitle", lang)}</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("regionsLead", lang)}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <li key={r.code}>
              <a
                href={`${base}/region/${r.code}`}
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

      <section id="about" className="panel mt-8 scroll-mt-24 px-5 py-6 sm:px-8">
        <h2 className="text-2xl">{t("aboutTitle", lang)}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {lang === "uk" ? (
            <>
              <p>
                Каталог містить усі можливі комбінації номерних знаків України у форматі
                XX0000YY: 27 кодів регіонів, номери від 0001 до 9999 та 144 серії. Для кожного
                номерного знака доступна сторінка з даними про операції з транспортним засобом
                із відкритої бази МВС України.
              </p>
              <p>
                У буквених сполученнях використовуються лише літери української кириліки, що
                мають графічні аналоги в латиниці: А, В, Е, І, К, М, Н, О, Р, С, Т, Х.
              </p>
            </>
          ) : (
            <>
              <p>
                Каталог содержит все возможные комбинации номерных знаков Украины в формате
                XX0000YY: 27 кодов регионов, номера от 0001 до 9999 и 144 серии. Для каждого
                номерного знака доступна страница с данными об операциях с транспортным
                средством из открытой базы МВД Украины.
              </p>
              <p>
                В буквенных сочетаниях используются только буквы украинской кириллицы, имеющие
                графические аналоги в латинице: А, В, Е, І, К, М, Н, О, Р, С, Т, Х.
              </p>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
