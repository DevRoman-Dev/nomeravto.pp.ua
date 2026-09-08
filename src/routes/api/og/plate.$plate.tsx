import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import React from "react";

import { toCyrillicPlate } from "@/lib/plates";

export const Route = createFileRoute("/api/og/plate/$plate")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        try {
          const latinPlate = String(params.plate)
            .toUpperCase()
            .replace(/[^0-9A-Z]/g, "")
            .slice(0, 8);
          
          const cleanPlate = latinPlate.endsWith("PNG") ? latinPlate.slice(0, -3) : latinPlate;
          const cyr = toCyrillicPlate(cleanPlate);

          return new ImageResponse(
            (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f1f5f9",
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
                    border: "8px solid #cbd5e1",
                    borderRadius: "16px",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    overflow: "hidden",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "120px",
                      height: "100%",
                      backgroundColor: "#0057b7",
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
                  
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0f172a",
                      fontSize: "170px",
                      fontWeight: "bold",
                      letterSpacing: "4px",
                      paddingBottom: "16px",
                    }}
                  >
                    {cyr}
                  </div>
                </div>
              </div>
            ),
            {
              width: 1200,
              height: 630,
            }
          );
        } catch (e) {
          console.error(e);
          return new Response("Failed to generate image", { status: 500 });
        }
      },
    },
  },
});
