import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as toCyrillicPlate, n as allSeries, r as findRegion, s as regionName } from "./plates-DEmAvcbq.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-WF_tPz7h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RegionPage-DSWY_19-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegionPage({ lang, code }) {
	const base = lang === "uk" ? "" : "/ru";
	const region = findRegion(code);
	const seriesList = allSeries();
	const [number, setNumber] = (0, import_react.useState)("0001");
	const digits = /^\d{4}$/.test(number) ? number : "0001";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/region/${code}` : `/region/${code}`,
		breadcrumbs: [
			{
				label: t("siteName", lang),
				href: `${base || "/"}`
			},
			{
				label: t("navRegions", lang),
				href: `${base}/#regions`
			},
			{ label: `${code} — ${regionName(region, lang)}` }
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel flex flex-wrap items-center gap-4 px-5 py-6 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "plate-face flex h-16 w-24 items-center justify-center text-3xl",
				children: region?.cyr ?? toCyrillicPlate(code)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl",
				children: regionName(region, lang)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					t("regionCode2004", lang),
					": ",
					region?.code ?? code,
					region?.code2013 ? ` • ${t("regionCode2013", lang)}: ${region.code2013}` : ""
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: t("seriesTitle", lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm text-muted-foreground",
					children: t("seriesLead", lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 flex max-w-xs flex-col gap-1 text-xs text-muted-foreground",
					children: [t("numberLabel", lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						maxLength: 4,
						value: number,
						onChange: (e) => setNumber(e.target.value.replace(/\D/g, "").slice(0, 4)),
						className: "plate-face h-11 px-3 text-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-8",
					children: seriesList.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `${base}/nomer/${region?.code ?? code}${digits}${s}`,
						className: "chip chip-hover block px-1 py-2 text-center text-sm",
						children: toCyrillicPlate(s)
					}) }, s))
				})
			]
		})]
	});
}
//#endregion
export { RegionPage as t };
