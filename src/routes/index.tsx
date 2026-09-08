import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/pages/HomePage";
import { breadcrumbLd, seoHead, siteLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Номерні знаки України — NOMERAVTO.PP.UA";
    const description =
      "Повний каталог номерних знаків України. Перевірка авто за держномером безкоштовно. Всі коди регіонів та серії.";
    return seoHead({
      lang: "uk",
      title,
      description,
      path: "/",
      altPath: "/ru",
      jsonLd: [
        breadcrumbLd([{ name: "Головна", item: "/" }]),
        siteLd("uk", "Номерні знаки України", description),
        softwareLd("uk", "Перевірка номерних знаків України"),
      ],
    });
  },
  component: () => <HomePage lang="uk" />,
});
