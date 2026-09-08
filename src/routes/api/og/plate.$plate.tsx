import { createFileRoute } from "@tanstack/react-router";

import { toCyrillicPlate } from "@/lib/plates";

// Generates a plain SVG Ukrainian license plate image.
// No external libraries — zero bundling issues.
// SVG is supported by all major social platforms (Telegram, Facebook, Twitter).
export const Route = createFileRoute("/api/og/plate/$plate")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const raw = String(params.plate)
          .toUpperCase()
          .replace(/\.PNG$/i, "")
          .replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "")
          .slice(0, 8);

        const cyr = toCyrillicPlate(raw);

        // Estimate text width to center it
        // Average char width at font-size 160 is ~95px; total width for up to 8 chars
        const charCount = cyr.length;
        const textAreaWidth = 1060; // space after the blue stripe
        const fontSize = charCount <= 6 ? 140 : charCount <= 7 ? 120 : 105;
        const letterSpacing = charCount <= 6 ? 8 : charCount <= 7 ? 4 : 2;

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#e8edf2"/>

  <!-- Plate body -->
  <rect x="100" y="165" width="1000" height="300" rx="20" ry="20" fill="#ffffff" stroke="#c0cad5" stroke-width="8"/>

  <!-- Blue left stripe -->
  <rect x="100" y="165" width="130" height="300" rx="20" ry="20" fill="#0057B7"/>
  <rect x="190" y="165" width="40" height="300" fill="#0057B7"/>

  <!-- Ukraine flag mini -->
  <rect x="130" y="200" width="70" height="35" fill="#0057B7"/>
  <rect x="130" y="235" width="70" height="35" fill="#FFD700"/>
  <rect x="130" y="197" width="70" height="73" rx="4" ry="4" fill="none" stroke="#ffffff" stroke-width="2"/>

  <!-- UA text -->
  <text x="165" y="440" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">UA</text>

  <!-- Plate text (centered in the white area from x=230 to x=1100) -->
  <text
    x="660"
    y="350"
    font-family="Arial Black, Arial, sans-serif"
    font-size="${fontSize}"
    font-weight="900"
    fill="#111827"
    text-anchor="middle"
    dominant-baseline="central"
    letter-spacing="${letterSpacing}"
  >${cyr}</text>
</svg>`;

        return new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
