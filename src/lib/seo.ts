import type { Lang } from "@/lib/i18n";

const SITE_DOMAIN = "https://nomeravto.pp.ua";

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_DOMAIN}${path}`;
}

export function seoHead({
  lang,
  title,
  description,
  path,
  altPath,
  jsonLd,
}: {
  lang: Lang;
  title: string;
  description: string;
  path: string;
  altPath: string;
  jsonLd?: Record<string, unknown>[];
}) {
  const url = absoluteUrl(path);
  const altUrl = absoluteUrl(altPath);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "uk" ? "uk_UA" : "ru_UA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "uk", href: lang === "uk" ? url : altUrl },
      { rel: "alternate", hrefLang: "ru", href: lang === "ru" ? url : altUrl },
      { rel: "alternate", hrefLang: "x-default", href: lang === "uk" ? url : altUrl },
    ],
    scripts: (jsonLd ?? []).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.item),
    })),
  };
}

export function siteLd(lang: Lang, name: string, description: string) {
  const base = lang === "uk" ? "/" : "/ru";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    description,
    inLanguage: lang === "uk" ? "uk-UA" : "ru-UA",
    url: absoluteUrl(base),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl(lang === "uk" ? "" : "/ru")}/nomer/{plate}`,
      },
      "query-input": "required name=plate",
    },
  };
}
