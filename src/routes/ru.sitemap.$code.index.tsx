import { createFileRoute } from "@tanstack/react-router";

import { SitemapSeriesPage } from "@/components/pages/SitemapSeriesPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/sitemap/$code/")({
  component: () => <SitemapSeriesPage lang="ru" code={Route.useParams().code} />,
  head: ({ params }) => seoHead("ru", { title: `Карта сайта - Регион ${params.code}` }),
});
