// Довідник кодів регіонів та утиліти для роботи з номерними знаками України.

export type Region = {
  /** Латинський код у форматі URL, напр. "BC" */
  code: string;
  /** Кириличне відображення коду, напр. "ВС" */
  cyr: string;
  /** Код стандарту 2013 року (латиницею) */
  code2013?: string;
  nameUk: string;
  nameRu: string;
};

export const REGIONS: Region[] = [
  { code: "AA", cyr: "АА", code2013: "KA", nameUk: "місто Київ", nameRu: "город Киев" },
  { code: "AB", cyr: "АВ", code2013: "KB", nameUk: "Вінницька область", nameRu: "Винницкая область" },
  { code: "AC", cyr: "АС", code2013: "KC", nameUk: "Волинська область", nameRu: "Волынская область" },
  { code: "AE", cyr: "АЕ", code2013: "KE", nameUk: "Дніпропетровська область", nameRu: "Днепропетровская область" },
  { code: "AH", cyr: "АН", code2013: "KH", nameUk: "Донецька область", nameRu: "Донецкая область" },
  { code: "AI", cyr: "АІ", code2013: "KI", nameUk: "Київська область", nameRu: "Киевская область" },
  { code: "AK", cyr: "АК", code2013: "KK", nameUk: "Автономна Республіка Крим", nameRu: "Автономная Республика Крым" },
  { code: "AM", cyr: "АМ", code2013: "KM", nameUk: "Житомирська область", nameRu: "Житомирская область" },
  { code: "AO", cyr: "АО", code2013: "KO", nameUk: "Закарпатська область", nameRu: "Закарпатская область" },
  { code: "AP", cyr: "АР", code2013: "KP", nameUk: "Запорізька область", nameRu: "Запорожская область" },
  { code: "AT", cyr: "АТ", code2013: "KT", nameUk: "Івано-Франківська область", nameRu: "Ивано-Франковская область" },
  { code: "AX", cyr: "АХ", code2013: "KX", nameUk: "Харківська область", nameRu: "Харьковская область" },
  { code: "BA", cyr: "ВА", code2013: "HA", nameUk: "Кіровоградська область", nameRu: "Кировоградская область" },
  { code: "BB", cyr: "ВВ", code2013: "HB", nameUk: "Луганська область", nameRu: "Луганская область" },
  { code: "BC", cyr: "ВС", code2013: "HC", nameUk: "Львівська область", nameRu: "Львовская область" },
  { code: "BE", cyr: "ВЕ", code2013: "HE", nameUk: "Миколаївська область", nameRu: "Николаевская область" },
  { code: "BH", cyr: "ВН", code2013: "HH", nameUk: "Одеська область", nameRu: "Одесская область" },
  { code: "BI", cyr: "ВІ", code2013: "HI", nameUk: "Полтавська область", nameRu: "Полтавская область" },
  { code: "BK", cyr: "ВК", code2013: "HK", nameUk: "Рівненська область", nameRu: "Ровенская область" },
  { code: "BM", cyr: "ВМ", code2013: "HM", nameUk: "Сумська область", nameRu: "Сумская область" },
  { code: "BO", cyr: "ВО", code2013: "HO", nameUk: "Тернопільська область", nameRu: "Тернопольская область" },
  { code: "BT", cyr: "ВТ", code2013: "HT", nameUk: "Херсонська область", nameRu: "Херсонская область" },
  { code: "BX", cyr: "ВХ", code2013: "HX", nameUk: "Хмельницька область", nameRu: "Хмельницкая область" },
  { code: "CA", cyr: "СА", code2013: "IA", nameUk: "Черкаська область", nameRu: "Черкасская область" },
  { code: "CB", cyr: "СВ", code2013: "IB", nameUk: "Чернігівська область", nameRu: "Черниговская область" },
  { code: "CE", cyr: "СЕ", code2013: "IE", nameUk: "Чернівецька область", nameRu: "Черновицкая область" },
  { code: "CH", cyr: "СН", nameUk: "місто Севастополь", nameRu: "город Севастополь" },
  { code: "II", cyr: "ІІ", nameUk: "загальнодержавні (спеціальні)", nameRu: "общегосударственные (специальные)" },
];

/** Літери, дозволені у номерних знаках України (латинські графічні аналоги). */
export const PLATE_LETTERS = ["A", "B", "C", "E", "H", "I", "K", "M", "O", "P", "T", "X"] as const;

const CYR_TO_LAT: Record<string, string> = {
  А: "A", В: "B", С: "C", Е: "E", Н: "H", І: "I", И: "I", Й: "I", К: "K",
  М: "M", О: "O", Р: "P", Т: "T", Х: "X", Ї: "I",
};

const LAT_TO_CYR: Record<string, string> = {
  A: "А", B: "В", C: "С", E: "Е", H: "Н", I: "І", K: "К",
  M: "М", O: "О", P: "Р", T: "Т", X: "Х",
};

/** Приводить будь-яке написання номера до латинського канонічного вигляду: BC4061TA */
export function toLatinPlate(input: string): string {
  return input
    .toUpperCase()
    .replace(/[^0-9A-ZА-ЯЁІЇЄҐ]/g, "")
    .split("")
    .map((ch) => CYR_TO_LAT[ch] ?? ch)
    .join("");
}

/** Кириличне відображення номера: ВС4061ТА */
export function toCyrillicPlate(input: string): string {
  return toLatinPlate(input)
    .split("")
    .map((ch) => LAT_TO_CYR[ch] ?? ch)
    .join("");
}

/** Форматує номер із пробілами: ВС 4061 ТА */
export function formatPlate(input: string): string {
  const cyr = toCyrillicPlate(input);
  const m = /^([A-ZА-ЯІ]{2})(\d{4})([A-ZА-ЯІ]{2})$/.exec(cyr);
  return m ? `${m[1]} ${m[2]} ${m[3]}` : cyr;
}

export function isValidPlate(input: string): boolean {
  const lat = toLatinPlate(input);
  const letters = PLATE_LETTERS.join("");
  return new RegExp(`^[${letters}]{2}\\d{4}[${letters}]{2}$`).test(lat);
}

export function parsePlate(input: string) {
  const lat = toLatinPlate(input);
  const m = /^([A-Z]{2})(\d{4})([A-Z]{2})$/.exec(lat);
  if (!m) return null;
  return { plate: lat, regionCode: m[1], number: m[2], series: m[3] };
}

export function findRegion(code: string): Region | undefined {
  const c = toLatinPlate(code);
  return REGIONS.find((r) => r.code === c || r.code2013 === c);
}

export function regionName(region: Region | undefined, lang: "uk" | "ru"): string {
  if (!region) return lang === "uk" ? "невідомий регіон" : "неизвестный регион";
  return lang === "uk" ? region.nameUk : region.nameRu;
}

/** Усі серії (двобуквенні сполучення) — 144 варіанти */
export function allSeries(): string[] {
  const out: string[] = [];
  for (const a of PLATE_LETTERS) for (const b of PLATE_LETTERS) out.push(a + b);
  return out;
}
