import { createFileRoute } from "@tanstack/react-router";

import { RegionPage } from "@/components/pages/RegionPage";
import { findRegion, regionName } from "@/lib/plates";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/region/$code")({
  head: ({ params }) => {
    const code = params.code.toUpperCase();
    const name = regionName(findRegion(code), "uk");
    const title = `Номерні знаки ${code} — ${name}`;
    const description = `Серії та комбінації номерних знаків з кодом регіону ${code} (${name}). Перевірка авто за держномером.`;
    return seoHead({
      lang: "uk",
      title,
      description,
      path: `/region/${code}`,
      altPath: `/ru/region/${code}`,
      jsonLd: [
        breadcrumbLd([
          { name: "Головна", item: "/" },
          { name: `${code} — ${name}`, item: `/region/${code}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          inLanguage: "uk-UA",
          about: { "@type": "Place", name },
        },
      ],
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { code } = Route.useParams();
  return <RegionPage lang="uk" code={code.toUpperCase()} />;
}
