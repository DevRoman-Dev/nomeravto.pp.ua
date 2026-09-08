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
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {lang === "uk" ? (
            <>
              <p>
                Цей ресурс — повний структурований каталог усіх номерних знаків України стандарту 2004 та 2015 років. Кожна можлива комбінація у форматі <strong className="text-foreground">XX0000YY</strong> представлена окремою сторінкою: 27 регіональних кодів, числова частина від 0001 до 9999 і 144 серії — разом це понад 38 мільйонів унікальних номерів.
              </p>
              <p>
                Для кожного номерного знака ми в режимі реального часу запитуємо відкриту базу МВС України та відображаємо всі наявні реєстраційні операції: первинну реєстрацію, зміни власника, перереєстрацію після ДТП, зняття з обліку тощо. Там, де дані є, ви побачите марку й модель автомобіля, рік випуску, тип кузова, об'єм двигателя, колір та регіон реєстрації.
              </p>
              <p>
                Буквені частини українських номерів складаються виключно з літер кириліці, що мають точні графічні відповідники в латиниці: <strong className="text-foreground">А, В, Е, І, К, М, Н, О, Р, С, Т, Х</strong>. Саме тому номер однаково читається і кирилицею, і латиною — це зроблено навмисно, щоб спростити міжнародне визнання документів та роботу автоматичних систем розпізнавання.
              </p>
              <p>
                З 2015 року в Україні діє оновлений стандарт: регіональні коди змінилися, а частина областей отримала нові двохлітерні префікси. На кожній сторінці регіону ви знайдете як старий код зразка 2004 року, так і новий — щоб можна було швидко зіставити будь-який знак із місцем його видачі.
              </p>
              <p>
                Якщо вас цікавить конкретний автомобіль — просто введіть номер у пошуковий рядок. Якщо хочете переглянути всі серії певного регіону — обирайте область зі списку нижче і переходьте до повного каталогу номерів цього регіону.
              </p>
            </>
          ) : (
            <>
              <p>
                Этот ресурс — полный структурированный каталог всех номерных знаков Украины стандарта 2004 и 2015 годов. Каждая возможная комбинация в формате <strong className="text-foreground">XX0000YY</strong> представлена отдельной страницей: 27 региональных кодов, числовая часть от 0001 до 9999 и 144 серии — в совокупности более 38 миллионов уникальных номеров.
              </p>
              <p>
                Для каждого номерного знака мы в режиме реального времени запрашиваем открытую базу МВД Украины и отображаем все имеющиеся регистрационные операции: первичную регистрацию, смену собственника, перерегистрацию после ДТП, снятие с учёта и другие. Там, где данные есть, вы увидите марку и модель автомобиля, год выпуска, тип кузова, объём двигателя, цвет и регион регистрации.
              </p>
              <p>
                Буквенные части украинских номеров состоят исключительно из букв кириллицы, имеющих точные графические аналоги в латинице: <strong className="text-foreground">А, В, Е, І, К, М, Н, О, Р, С, Т, Х</strong>. Именно поэтому номер одинаково читается и кириллицей, и латиницей — это сделано намеренно, чтобы упростить международное признание документов и работу автоматических систем распознавания.
              </p>
              <p>
                С 2015 года в Украине действует обновлённый стандарт: региональные коды изменились, а часть областей получила новые двухбуквенные префиксы. На каждой странице региона вы найдёте как старый код образца 2004 года, так и новый — чтобы можно было быстро соотнести любой знак с местом его выдачи.
              </p>
              <p>
                Если вас интересует конкретный автомобиль — просто введите номер в строку поиска. Если хотите просмотреть все серии определённого региона — выберите область из списка ниже и перейдите к полному каталогу номеров этого региона.
              </p>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
