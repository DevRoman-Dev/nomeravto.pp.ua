import { createFileRoute } from "@tanstack/react-router";

// Serves the Yandex/Google verification file at the root URL.
// Static files in public/ are not reliably served by Nitro SSR on Vercel —
// this server route guarantees the file is always accessible.
export const Route = createFileRoute("/f80075330ad1ee37b07ef3b86f721daf.txt")({
  server: {
    handlers: {
      GET: () => {
        return new Response("f80075330ad1ee37b07ef3b86f721daf", {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
