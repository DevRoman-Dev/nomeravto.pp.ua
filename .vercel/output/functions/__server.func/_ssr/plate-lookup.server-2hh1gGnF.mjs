import { l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plate-lookup.server-2hh1gGnF.js
var SOURCE = "http://www.unda.com.ua/gosnomer-UA";
var FIELD_KEYS = {
	"ГОСНОМЕР ТС": "plate",
	"Дата операции": "date",
	"Операция": "operation",
	"Сервис Центр": "center",
	"VIN": "vin",
	"Марка Модель": "model",
	"Год выпуска": "year",
	"Цвет": "color",
	"Тип ТС": "vehicleType",
	"Кузов": "body",
	"Топливо": "fuel",
	"Объем двигателя": "engine",
	"Вес без/с нагрузкой": "weight",
	"Адрес регистрации": "address",
	"Собственник": "owner"
};
function decode(raw) {
	return raw.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&sup3;/g, "³").replace(/&#8226;/g, "•").replace(/&#10003;/g, "").replace(/&laquo;/g, "«").replace(/&raquo;/g, "»").replace(/&ndash;/g, "–").replace(/&mdash;/g, "—").replace(/&quot;/g, "\"").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d))).replace(/\s+/g, " ").trim();
}
function normalizeKey(label) {
	const clean = decode(label).replace(/:\s*$/, "").trim();
	return FIELD_KEYS[clean] ?? clean;
}
async function lookupPlateOnSource(rawPlate) {
	const plate = toLatinPlate(rawPlate);
	const empty = {
		plate,
		found: false,
		summary: null,
		operations: [],
		variants: [],
		variantsRegionRu: null,
		variantsNumber: null,
		error: null
	};
	let html = "";
	try {
		const res = await fetch(`${SOURCE}/${plate}/`, { headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
			"Accept-Language": "uk,ru;q=0.8"
		} });
		if (!res.ok) return {
			...empty,
			error: `source_status_${res.status}`
		};
		html = await res.text();
	} catch {
		return {
			...empty,
			error: "source_unreachable"
		};
	}
	const main = /<main[\s\S]*?<\/main>/i.exec(html)?.[0] ?? html;
	const summaryMatch = /<div class=['"]alert alert-success['"][^>]*>([\s\S]*?)<\/div>/i.exec(main);
	const summary = summaryMatch ? decode(summaryMatch[1] ?? "") : null;
	const operations = [];
	const blockRe = /<div class=['"]alert alert-text['"][^>]*>([\s\S]*?)<\/div>\s*(?=<p|<div class=['"]panel)/gi;
	let block;
	while (block = blockRe.exec(main)) {
		const inner = block[1] ?? "";
		const fields = [];
		const pairRe = /<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/gi;
		let pair;
		while (pair = pairRe.exec(inner)) {
			const value = decode(pair[2] ?? "");
			if (value) fields.push({
				key: normalizeKey(pair[1] ?? ""),
				value
			});
		}
		if (fields.length) operations.push({ fields });
	}
	const variants = [];
	const linkRe = /href=['"]\/gosnomer-UA\/([A-Z0-9]{8})\/['"]/gi;
	let link;
	while (link = linkRe.exec(main)) {
		const v = link[1] ?? "";
		if (v && v !== plate && !variants.includes(v)) variants.push(v);
	}
	const varInfo = /По региону регистрации\s*<b[^>]*>([\s\S]*?)<\/b>[\s\S]*?гос номера\s*<b[^>]*>([\s\S]*?)<\/b>/i.exec(main);
	return {
		plate,
		found: operations.length > 0,
		summary,
		operations,
		variants,
		variantsRegionRu: varInfo ? decode(varInfo[1] ?? "") : null,
		variantsNumber: varInfo ? decode(varInfo[2] ?? "") : null,
		error: null
	};
}
//#endregion
export { lookupPlateOnSource };
