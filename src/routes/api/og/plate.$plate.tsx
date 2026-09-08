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

        // textLength forces SVG to scale the text to exactly fit the plate white area.
        // This is the most reliable approach — no matter how many chars, it always fits.
        const plateTextWidth = 820; // available width inside white area (from x=240 to x=1090)

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

  <!-- Plate text: textLength forces it to always fit the white area exactly -->
  <text
    x="655"
    y="350"
    font-family="Arial Black, Arial, sans-serif"
    font-size="130"
    font-weight="900"
    fill="#111827"
    text-anchor="middle"
    dominant-baseline="central"
    textLength="${plateTextWidth}"
    lengthAdjust="spacingAndGlyphs"
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
