import { createServerFn } from "@tanstack/react-start";

export const lookupPlate = createServerFn({ method: "GET" })
  .inputValidator((data: { plate: string }) => {
    const plate = String(data?.plate ?? "")
      .toUpperCase()
      .replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "")
      .slice(0, 10);
    if (!plate) throw new Error("plate_required");
    return { plate };
  })
  .handler(async ({ data }) => {
    const { lookupPlateOnSource } = await import("./plate-lookup.server");
    return lookupPlateOnSource(data.plate);
  });
