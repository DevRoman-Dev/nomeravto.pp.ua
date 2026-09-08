import { createFileRoute } from "@tanstack/react-router";
import { SitemapRegionsPage } from "@/components/pages/SitemapRegionsPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sitemap/")({
  component: () => <SitemapRegionsPage lang="uk" />,
  head: () => seoHead({
    lang: "uk",
    title: "Карта сайту",
    description: "Повна карта сайту автомобільних номерів України",
    path: "/sitemap",
    altPath: "/ru/sitemap"
  })
});
