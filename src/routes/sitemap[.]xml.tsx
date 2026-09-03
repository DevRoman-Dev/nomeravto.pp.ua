import { createFileRoute } from "@tanstack/react-router";

import { REGIONS } from "@/lib/plates";

const DOMAIN = "https://nomeravto.pp.ua";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/ru"];
        for (const r of REGIONS) {
          paths.push(`/region/${r.code}`, `/ru/region/${r.code}`);
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${DOMAIN}${p}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
