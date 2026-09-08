import { createFileRoute } from "@tanstack/react-router";

import { SitemapSeriesPage } from "@/components/pages/SitemapSeriesPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sitemap/$code/")({
  component: () => <SitemapSeriesPage lang="uk" code={Route.useParams().code} />,
  head: ({ params }) => seoHead("uk", { title: `Карта сайту - Регіон ${params.code}` }),
});
