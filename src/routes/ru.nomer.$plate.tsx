import { createFileRoute } from "@tanstack/react-router";

import { PlatePage } from "@/components/pages/PlatePage";
import { findRegion, parsePlate, regionName, toCyrillicPlate, toLatinPlate } from "@/lib/plates";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/nomer/$plate")({
  head: ({ params }) => {
    const latin = toLatinPlate(params.plate);
    const cyr = toCyrillicPlate(latin);
    const parsed = parsePlate(latin);
    const region = findRegion(parsed?.regionCode ?? "");
    const name = regionName(region, "ru");
    const title = `Номерной знак ${cyr} — данные об авто`;
    const description = `Информация о транспортном средстве с номерным знаком ${cyr}: регион, VIN, марка, модель, год выпуска и история регистрационных операций.`;
    return seoHead({
      lang: "ru",
      title,
      description,
      path: `/ru/nomer/${latin}`,
      altPath: `/nomer/${latin}`,
      jsonLd: [
        breadcrumbLd([
          { name: "Главная", item: "/ru" },
          ...(region ? [{ name: name, item: `/ru/region/${region.code}` }] : []),
          { name: cyr, item: `/ru/nomer/${latin}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemPage",
          name: title,
          description,
          inLanguage: "ru-UA",
          mainEntity: {
            "@type": "Vehicle",
            name: `Автомобиль с номерным знаком ${cyr}`,
            vehicleRegistrationPlate: cyr,
          },
        },
      ],
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { plate } = Route.useParams();
  return <PlatePage lang="ru" plate={toLatinPlate(plate)} />;
}
