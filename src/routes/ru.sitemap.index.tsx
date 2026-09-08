import { createFileRoute } from "@tanstack/react-router";
import { SitemapRegionsPage } from "@/components/pages/SitemapRegionsPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/sitemap/")({
  component: () => <SitemapRegionsPage lang="ru" />,
  head: () => seoHead({
    lang: "ru",
    title: "Карта сайта",
    description: "Полная карта сайта автомобильных номеров Украины",
    path: "/ru/sitemap",
    altPath: "/sitemap"
  })
});
