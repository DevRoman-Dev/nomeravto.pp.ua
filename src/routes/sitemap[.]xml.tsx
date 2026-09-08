import { createFileRoute } from "@tanstack/react-router";
import { REGIONS } from "@/lib/plates";

const DOMAIN = "https://nomeravto.pp.ua";

const BLOG_SLUGS = ["region-codes", "check-accidents", "plate-colors"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const now = new Date().toISOString().split("T")[0];

        const staticPaths = [
          { path: "/", priority: "1.0", changefreq: "daily" },
          { path: "/ru", priority: "1.0", changefreq: "daily" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/ru/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/sitemap", priority: "0.7", changefreq: "monthly" },
          { path: "/ru/sitemap", priority: "0.7", changefreq: "monthly" },
        ];

        const blogPaths = BLOG_SLUGS.flatMap((slug) => [
          { path: `/blog/${slug}`, priority: "0.8", changefreq: "monthly" },
          { path: `/ru/blog/${slug}`, priority: "0.8", changefreq: "monthly" },
        ]);

        const regionPaths = REGIONS.flatMap((r) => [
          { path: `/region/${r.code}`, priority: "0.7", changefreq: "monthly" },
          { path: `/ru/region/${r.code}`, priority: "0.7", changefreq: "monthly" },
          // Sitemap index pages — entry points for Googlebot into all 38M plates
          { path: `/sitemap/${r.code}`, priority: "0.6", changefreq: "monthly" },
          { path: `/ru/sitemap/${r.code}`, priority: "0.6", changefreq: "monthly" },
        ]);

        const allPaths = [...staticPaths, ...blogPaths, ...regionPaths];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (p) => `  <url>
    <loc>${DOMAIN}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
