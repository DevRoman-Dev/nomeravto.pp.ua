import type { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PlateSearch } from "@/components/PlateSearch";
import { type Lang, t } from "@/lib/i18n";

interface BlogArticleLayoutProps {
  lang: Lang;
  title: string;
  slug: string;
  children: ReactNode;
}

export function BlogArticleLayout({ lang, title, slug, children }: BlogArticleLayoutProps) {
  const base = lang === "uk" ? "" : "/ru";
  const alt = lang === "uk" ? `/ru/blog/${slug}` : `/blog/${slug}`;
  
  const breadcrumbs = [
    { label: t("navBlog", lang), href: `${base}/blog` },
    { label: title, href: "" },
  ];

  return (
    <SiteLayout lang={lang} altHref={alt} breadcrumbs={breadcrumbs}>
      <article className="panel mx-auto max-w-3xl px-5 py-7 sm:px-8 sm:py-10">
        <h1 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl text-foreground">
          {title}
        </h1>
        
        <div className="prose prose-sm sm:prose-base dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          {children}
        </div>
        
        <hr className="my-10 border-border" />
        
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            {lang === "uk" ? "Перевірити авто прямо зараз" : "Проверить авто прямо сейчас"}
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            {lang === "uk" 
              ? "Дізнайтеся історію автомобіля, марку, модель та рік випуску за державним номером абсолютно безкоштовно."
              : "Узнайте историю автомобиля, марку, модель и год выпуска по государственному номеру абсолютно бесплатно."}
          </p>
          <PlateSearch lang={lang} />
        </div>
      </article>
    </SiteLayout>
  );
}
