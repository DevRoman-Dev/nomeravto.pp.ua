import { SiteLayout } from "@/components/SiteLayout";
import { type Lang, t } from "@/lib/i18n";

const ARTICLES = [
  {
    slug: "region-codes",
    title: { uk: "Коди регіонів України 2004-2024", ru: "Коды регионов Украины 2004-2024" },
    desc: {
      uk: "Повна таблиця кодів номерних знаків України. Як визначити область реєстрації за першими літерами номера.",
      ru: "Полная таблица кодов номерных знаков Украины. Как определить область регистрации по первым буквам номера.",
    },
  },
  {
    slug: "check-accidents",
    title: { uk: "Як перевірити авто на ДТП та арешти", ru: "Как проверить авто на ДТП и аресты" },
    desc: {
      uk: "Безкоштовні та платні способи перевірити історію автомобіля за державним номером перед покупкою.",
      ru: "Бесплатные и платные способы проверить историю автомобиля по государственному номеру перед покупкой.",
    },
  },
  {
    slug: "plate-colors",
    title: { uk: "Що означають кольорові номерні знаки", ru: "Что означают цветные номерные знаки" },
    desc: {
      uk: "Розшифровка чорних, жовтих, синіх та червоних номерів. Хто і на яких підставах ними користується.",
      ru: "Расшифровка черных, желтых, синих и красных номеров. Кто и на каких основаниях ими пользуется.",
    },
  },
];

export function BlogPage({ lang }: { lang: Lang }) {
  const base = lang === "uk" ? "" : "/ru";
  const alt = lang === "uk" ? "/ru/blog" : "/blog";
  const breadcrumbs = [{ label: t("navBlog", lang), href: "" }];

  return (
    <SiteLayout lang={lang} altHref={alt} breadcrumbs={breadcrumbs}>
      <section className="panel px-5 py-7 sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {lang === "uk" ? "Довідник автомобіліста" : "Справочник автомобилиста"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {lang === "uk"
            ? "Корисні статті про номерні знаки, перевірку автомобілів та історію транспортних засобів в Україні."
            : "Полезные статьи про номерные знаки, проверку автомобилей и историю транспортных средств в Украине."}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <a
              key={a.slug}
              href={`${base}/blog/${a.slug}`}
              className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {a.title[lang]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {a.desc[lang]}
              </p>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
