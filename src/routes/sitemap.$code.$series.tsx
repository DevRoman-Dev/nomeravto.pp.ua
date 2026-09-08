import { createFileRoute } from "@tanstack/react-router";

import { SitemapNumbersPage } from "@/components/pages/SitemapNumbersPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sitemap/$code/$series")({
  component: () => {
    const params = Route.useParams();
    return <SitemapNumbersPage lang="uk" code={params.code} series={params.series} />;
  },
  head: ({ params }) => seoHead("uk", { title: `Карта сайту - Регіон ${params.code}, Серія ${params.series}` }),
});
