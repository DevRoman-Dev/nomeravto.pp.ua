import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/pages/HomePage";
import { breadcrumbLd, seoHead, siteLd } from "@/lib/seo";

const title = "Номерні знаки України — база даних авто за держномером";
const description =
  "Пошук інформації про автомобіль за номерним знаком України: регіон реєстрації, VIN, марка, модель, рік випуску та історія операцій.";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      lang: "uk",
      title,
      description,
      path: "/",
      altPath: "/ru",
      jsonLd: [
        siteLd("uk", "Номерні знаки України", description),
        breadcrumbLd([{ name: "Головна", item: "/" }]),
      ],
    }),
  component: () => <HomePage lang="uk" />,
});
