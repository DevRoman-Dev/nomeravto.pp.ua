import { useState } from "react";

import { type Lang, t } from "@/lib/i18n";
import { isValidPlate, toLatinPlate } from "@/lib/plates";

export function PlateSearch({ lang }: { lang: Lang }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const base = lang === "uk" ? "" : "/ru";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isValidPlate(value)) {
          setError(true);
          return;
        }
        setError(false);
        window.location.assign(`${base}/nomer/${toLatinPlate(value)}`);
      }}
      className="w-full"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          maxLength={12}
          aria-label={t("searchPlaceholder", lang)}
          placeholder={t("searchPlaceholder", lang)}
          className="plate-face h-14 flex-1 px-4 text-2xl uppercase outline-none placeholder:text-base placeholder:tracking-widest placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          className="h-14 rounded-md bg-primary px-6 font-plate text-lg tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t("searchButton", lang)}
        </button>
      </div>
      <p className={`mt-2 text-xs ${error ? "text-destructive" : "text-muted-foreground"}`}>
        {error ? t("invalidPlate", lang) : t("searchHint", lang)}
      </p>
    </form>
  );
}
