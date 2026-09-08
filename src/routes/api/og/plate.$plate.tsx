import { createFileRoute } from "@tanstack/react-router";
import { Resvg } from "@resvg/resvg-js";
import React from "react";
import satori from "satori";

import { toCyrillicPlate } from "@/lib/plates";

let fontData: ArrayBuffer | null = null;
async function getFontData() {
  if (!fontData) {
    // Fetch a standard bold font from Google Fonts (Roboto Bold)
    const res = await fetch("https://github.com/google/fonts/raw/main/apache/roboto/Roboto-Bold.ttf");
    fontData = await res.arrayBuffer();
  }
  return fontData;
}

export const Route = createFileRoute("/api/og/plate/$plate")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const latinPlate = String(params.plate)
          .toUpperCase()
          .replace(/[^0-9A-Z]/g, "")
          .slice(0, 8);
        
        // Remove .png if present
        const cleanPlate = latinPlate.endsWith("PNG") ? latinPlate.slice(0, -3) : latinPlate;
        
        const cyr = toCyrillicPlate(cleanPlate);

        const font = await getFontData();

        // 1200x630 is standard OG image size.
        // We'll scale up a plate to fit nicely in the middle.
        const svg = await satori(
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              backgroundColor: "#f1f5f9", // Slate 50 background
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "1000px",
                height: "250px",
                backgroundColor: "#ffffff",
                border: "8px solid #cbd5e1", // subtle border
                borderRadius: "16px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              {/* Left Stripe (Ukraine Flag style from 2015+) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "120px",
                  height: "100%",
                  backgroundColor: "#0057b7", // UA Blue
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                   <div style={{ display: "flex", width: "60px", height: "40px", flexDirection: "column", overflow: "hidden", borderRadius: "4px" }}>
                      <div style={{ display: "flex", width: "100%", height: "50%", backgroundColor: "#0057b7" }}></div>
                      <div style={{ display: "flex", width: "100%", height: "50%", backgroundColor: "#ffd700" }}></div>
                   </div>
                </div>
                <div style={{ display: "flex", color: "#ffffff", fontSize: "36px", fontWeight: "bold" }}>
                  UA
                </div>
              </div>
              
              {/* Plate Text */}
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                  fontSize: "170px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  letterSpacing: "4px",
                  paddingBottom: "16px", // Visual alignment
                }}
              >
                {cyr}
              </div>
            </div>
          </div>,
          {
            width: 1200,
            height: 630,
            fonts: [
              {
                name: "Roboto",
                data: font,
                weight: 700,
                style: "normal",
              },
            ],
          }
        );

        const resvg = new Resvg(svg, {
          background: "rgba(238, 235, 230, .9)",
        });
        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();

        return new Response(pngBuffer, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000, immutable", // Cache heavily
          },
        });
      },
    },
  },
});
