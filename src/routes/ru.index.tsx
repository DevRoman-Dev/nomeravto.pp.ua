import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/pages/HomePage";
import { breadcrumbLd, seoHead, siteLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/ru/")({
  head: () => {
    const title = "Номерные знаки Украины — NOMERAVTO.PP.UA";
    const description =
      "Полный каталог номерных знаков Украины. Проверка авто по госномеру бесплатно. Все коды регионов и серии.";
    return seoHead({
      lang: "ru",
      title,
      description,
      path: "/ru",
      altPath: "/",
      jsonLd: [
        breadcrumbLd([{ name: "Главная", item: "/ru" }]),
        siteLd("ru", "Номерные знаки Украины", description),
        softwareLd("ru", "Проверка номерных знаков Украины"),
      ],
    });
  },
  component: () => <HomePage lang="ru" />,
});
