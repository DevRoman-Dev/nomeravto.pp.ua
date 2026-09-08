import { createFileRoute } from "@tanstack/react-router";

import { SitemapRegionsPage } from "@/components/pages/SitemapRegionsPage";

export const Route = createFileRoute("/ru/sitemap/")({
  component: () => <SitemapRegionsPage lang="ru" />,
});
