import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as regionName, t as REGIONS } from "./plates-DEmAvcbq.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-BFTVPuGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SitemapRegionsPage-Co7Kcyu_.js
var import_jsx_runtime = require_jsx_runtime();
function SitemapRegionsPage({ lang }) {
	const base = lang === "uk" ? "" : "/ru";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/sitemap` : `/sitemap`,
		breadcrumbs: [{
			label: t("siteName", lang),
			href: `${base || "/"}`
		}, { label: t("sitemap", lang) }],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel px-5 py-6 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl sm:text-3xl",
					children: [
						t("sitemap", lang),
						" - ",
						t("regionsTitle", lang)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: lang === "uk" ? "Оберіть регіон, щоб переглянути всі доступні серії номерних знаків." : "Выберите регион, чтобы просмотреть все доступные серии номерных знаков."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `${base}/sitemap/${r.code}`,
						className: "panel flex h-full items-center gap-3 px-3 py-3 transition-colors hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "plate-face flex h-11 w-14 shrink-0 items-center justify-center text-xl",
							children: r.cyr
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm font-semibold",
								children: regionName(r, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted-foreground",
								children: [
									t("regionCode2004", lang),
									": ",
									r.code,
									r.code2013 ? ` • ${t("regionCode2013", lang)}: ${r.code2013}` : ""
								]
							})]
						})]
					}) }, r.code))
				})
			]
		})
	});
}
//#endregion
export { SitemapRegionsPage as t };
