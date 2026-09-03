import { createFileRoute } from "@tanstack/react-router";

import { PlatePage } from "@/components/pages/PlatePage";
import { findRegion, parsePlate, regionName, toCyrillicPlate, toLatinPlate } from "@/lib/plates";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/nomer/$plate")({
  head: ({ params }) => {
    const latin = toLatinPlate(params.plate);
    const cyr = toCyrillicPlate(latin);
    const parsed = parsePlate(latin);
    const region = findRegion(parsed?.regionCode ?? "");
    const name = regionName(region, "uk");
    const title = `Номерний знак ${cyr} — дані про авто`;
    const description = `Інформація про транспортний засіб з номерним знаком ${cyr}: регіон, VIN, марка, модель, рік випуску та історія реєстраційних операцій.`;
    return seoHead({
      lang: "uk",
      title,
      description,
      path: `/nomer/${latin}`,
      altPath: `/ru/nomer/${latin}`,
      jsonLd: [
        breadcrumbLd([
          { name: "Головна", item: "/" },
          ...(region ? [{ name: name, item: `/region/${region.code}` }] : []),
          { name: cyr, item: `/nomer/${latin}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemPage",
          name: title,
          description,
          inLanguage: "uk-UA",
          mainEntity: {
            "@type": "Vehicle",
            vehicleIdentificationNumber: undefined,
            name: `Автомобіль з номерним знаком ${cyr}`,
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
  return <PlatePage lang="uk" plate={toLatinPlate(plate)} />;
}
