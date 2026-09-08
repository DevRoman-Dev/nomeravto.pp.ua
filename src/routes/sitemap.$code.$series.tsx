import { createFileRoute } from "@tanstack/react-router";
import { SitemapNumbersPage } from "@/components/pages/SitemapNumbersPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sitemap/$code/$series")({
  component: () => {
    const params = Route.useParams();
    return <SitemapNumbersPage lang="uk" code={params.code} series={params.series} />;
  },
  head: ({ params }) => seoHead({
    lang: "uk",
    title: `Карта сайту - Регіон ${params.code}, Серія ${params.series}`,
    description: `Усі номерні знаки для регіону ${params.code}, серії ${params.series}`,
    path: `/sitemap/${params.code}/${params.series}`,
    altPath: `/ru/sitemap/${params.code}/${params.series}`
  }),
});
