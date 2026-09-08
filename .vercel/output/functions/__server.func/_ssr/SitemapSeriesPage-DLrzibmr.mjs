import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as toCyrillicPlate, n as allSeries, r as findRegion, s as regionName } from "./plates-DEmAvcbq.mjs";
import { d as SiteLayout, p as t } from "./router-BxkBg7Hk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SitemapSeriesPage-DLrzibmr.js
var import_jsx_runtime = require_jsx_runtime();
function SitemapSeriesPage({ lang, code }) {
	const base = lang === "uk" ? "" : "/ru";
	const region = findRegion(code);
	const seriesList = allSeries();
	if (!region) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/sitemap` : `/sitemap`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-8 text-center text-xl",
			children: "Region not found"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/sitemap/${code}` : `/sitemap/${code}`,
		breadcrumbs: [
			{
				label: t("siteName", lang),
				href: `${base || "/"}`
			},
			{
				label: t("sitemap", lang),
				href: `${base}/sitemap`
			},
			{ label: regionName(region, lang) }
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel px-5 py-6 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl sm:text-3xl",
					children: [
						t("sitemap", lang),
						" - ",
						regionName(region, lang)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: lang === "uk" ? "Оберіть серію (літерне закінчення), щоб переглянути всі 9999 номерних знаків цієї серії." : "Выберите серию (буквенное окончание), чтобы просмотреть все 9999 номерных знаков этой серии."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-8",
					children: seriesList.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `${base}/sitemap/${code}/${s}`,
						className: "chip chip-hover block px-1 py-3 text-center text-sm font-bold",
						children: ["** ", toCyrillicPlate(s)]
					}) }, s))
				})
			]
		})
	});
}
//#endregion
export { SitemapSeriesPage as t };
