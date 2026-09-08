import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as toCyrillicPlate, r as findRegion, s as regionName } from "./plates-DEmAvcbq.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-BFTVPuGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SitemapNumbersPage-BWOzJzTk.js
var import_jsx_runtime = require_jsx_runtime();
function SitemapNumbersPage({ lang, code, series }) {
	const base = lang === "uk" ? "" : "/ru";
	const region = findRegion(code);
	if (!region) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/sitemap` : `/sitemap`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-8 text-center text-xl",
			children: "Region not found"
		})
	});
	const numbers = Array.from({ length: 9999 }, (_, i) => String(i + 1).padStart(4, "0"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/sitemap/${code}/${series}` : `/sitemap/${code}/${series}`,
		breadcrumbs: [
			{
				label: t("siteName", lang),
				href: `${base || "/"}`
			},
			{
				label: t("sitemap", lang),
				href: `${base}/sitemap`
			},
			{
				label: regionName(region, lang),
				href: `${base}/sitemap/${code}`
			},
			{ label: `${toCyrillicPlate(code)} **** ${toCyrillicPlate(series)}` }
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel px-5 py-6 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl sm:text-3xl",
					children: [
						toCyrillicPlate(code),
						" 0001-9999 ",
						toCyrillicPlate(series)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: lang === "uk" ? `Усі номерні знаки регіону ${regionName(region, lang)} серії ${toCyrillicPlate(series)}.` : `Все номерные знаки региона ${regionName(region, lang)} серии ${toCyrillicPlate(series)}.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-4 gap-x-2 gap-y-1 text-sm sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12",
					children: numbers.map((num) => {
						const plate = `${code}${num}${series}`;
						const displayPlate = `${toCyrillicPlate(code)} ${num} ${toCyrillicPlate(series)}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${base}/nomer/${plate}`,
							className: "hover:text-primary hover:underline text-muted-foreground",
							children: displayPlate
						}, plate);
					})
				})
			]
		})
	});
}
//#endregion
export { SitemapNumbersPage as t };
