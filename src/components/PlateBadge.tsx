import { formatPlate } from "@/lib/plates";

export function PlateBadge({
  plate,
  size = "md",
}: {
  plate: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-base px-2 py-1",
    md: "text-2xl px-3 py-1.5",
    lg: "text-3xl sm:text-5xl px-4 py-2.5",
  } as const;

  return (
    <span className={`plate-face inline-flex items-center gap-2 ${sizes[size]}`}>
      <span
        aria-hidden
        className="inline-flex h-full flex-col overflow-hidden rounded-[3px] border border-border"
      >
        <span className="h-2 w-3 bg-flag-blue sm:w-4" />
        <span className="h-2 w-3 bg-flag-gold sm:w-4" />
      </span>
      {formatPlate(plate)}
    </span>
  );
}
