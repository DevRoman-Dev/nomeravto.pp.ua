import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/BlogPage";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/blog/")({
  head: () => seoHead({
    lang: "ru",
    title: "Справочник автомобилиста — статьи про номерные знаки",
    description: "Полезные статьи про номерные знаки, проверку автомобилей и историю транспортных средств в Украине.",
    path: "/ru/blog",
    altPath: "/blog",
    jsonLd: [
      breadcrumbLd([
        { name: "Главная", item: "/ru" },
        { name: "Блог", item: "/ru/blog" },
      ]),
    ],
  }),
  component: () => <BlogPage lang="ru" />,
});
