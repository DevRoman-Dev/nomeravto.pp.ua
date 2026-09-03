import { createFileRoute } from "@tanstack/react-router";

import { RegionPage } from "@/components/pages/RegionPage";
import { findRegion, regionName } from "@/lib/plates";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/region/$code")({
  head: ({ params }) => {
    const code = params.code.toUpperCase();
    const name = regionName(findRegion(code), "ru");
    const title = `Номерные знаки ${code} — ${name}`;
    const description = `Серии и комбинации номерных знаков с кодом региона ${code} (${name}). Проверка авто по госномеру.`;
    return seoHead({
      lang: "ru",
      title,
      description,
      path: `/ru/region/${code}`,
      altPath: `/region/${code}`,
      jsonLd: [
        breadcrumbLd([
          { name: "Главная", item: "/ru" },
          { name: `${code} — ${name}`, item: `/ru/region/${code}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          inLanguage: "ru-UA",
          about: { "@type": "Place", name },
        },
      ],
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { code } = Route.useParams();
  return <RegionPage lang="ru" code={code.toUpperCase()} />;
}
