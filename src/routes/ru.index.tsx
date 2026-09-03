import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/pages/HomePage";
import { breadcrumbLd, seoHead, siteLd } from "@/lib/seo";

const title = "Номерные знаки Украины — база данных авто по госномеру";
const description =
  "Поиск информации об автомобиле по номерному знаку Украины: регион регистрации, VIN, марка, модель, год выпуска и история операций.";

export const Route = createFileRoute("/ru/")({
  head: () =>
    seoHead({
      lang: "ru",
      title,
      description,
      path: "/ru",
      altPath: "/",
      jsonLd: [
        siteLd("ru", "Номерные знаки Украины", description),
        breadcrumbLd([{ name: "Главная", item: "/ru" }]),
      ],
    }),
  component: () => <HomePage lang="ru" />,
});
