import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/BlogPage";
import { breadcrumbLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seoHead({
    lang: "uk",
    title: "Довідник автомобіліста — статті про номерні знаки",
    description: "Корисні статті про номерні знаки, перевірку автомобілів та історію транспортних засобів в Україні.",
    path: "/blog",
    altPath: "/ru/blog",
    jsonLd: [
      breadcrumbLd([
        { name: "Головна", item: "/" },
        { name: "Блог", item: "/blog" },
      ]),
    ],
  }),
  component: () => <BlogPage lang="uk" />,
});
