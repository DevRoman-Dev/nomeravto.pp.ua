import { createFileRoute } from "@tanstack/react-router";
import { SitemapNumbersPage } from "@/components/pages/SitemapNumbersPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/sitemap/$code/$series")({
  component: () => {
    const params = Route.useParams();
    return <SitemapNumbersPage lang="ru" code={params.code} series={params.series} />;
  },
  head: ({ params }) => seoHead({
    lang: "ru",
    title: `Карта сайта - Регион ${params.code}, Серия ${params.series}`,
    description: `Все номерные знаки для региона ${params.code}, серии ${params.series}`,
    path: `/ru/sitemap/${params.code}/${params.series}`,
    altPath: `/sitemap/${params.code}/${params.series}`
  }),
});
