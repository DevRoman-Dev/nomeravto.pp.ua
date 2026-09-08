import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as regionName, t as REGIONS } from "./plates-DEmAvcbq.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-WF_tPz7h.mjs";
import { n as PlateSearch, t as PlateBadge } from "./PlateSearch-B3l4eQQe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HomePage-CYctHnIN.js
var import_jsx_runtime = require_jsx_runtime();
var SAMPLES = [
	"BC4061TA",
	"AA1234BI",
	"AX7777IE",
	"KA0001AA"
];
function HomePage({ lang }) {
	const base = lang === "uk" ? "" : "/ru";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? "/ru" : "/",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel px-5 py-7 sm:px-8 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-plate text-xs tracking-[0.28em] text-muted-foreground uppercase",
						children: t("tagline", lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl leading-tight sm:text-4xl",
						children: t("searchTitle", lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 max-w-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateSearch, { lang })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap items-center gap-2",
						children: SAMPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${base}/nomer/${p}`,
							className: "transition-transform hover:-translate-y-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateBadge, {
								plate: p,
								size: "sm"
							})
						}, p))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "regions",
				className: "mt-8 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: t("regionsTitle", lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-sm text-muted-foreground",
						children: t("regionsLead", lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${base}/region/${r.code}`,
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "panel mt-8 scroll-mt-24 px-5 py-6 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: t("aboutTitle", lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground",
					children: lang === "uk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Каталог містить усі можливі комбінації номерних знаків України у форматі XX0000YY: 27 кодів регіонів, номери від 0001 до 9999 та 144 серії. Для кожного номерного знака доступна сторінка з даними про операції з транспортним засобом із відкритої бази МВС України." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "У буквених сполученнях використовуються лише літери української кириліки, що мають графічні аналоги в латиниці: А, В, Е, І, К, М, Н, О, Р, С, Т, Х." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Каталог содержит все возможные комбинации номерных знаков Украины в формате XX0000YY: 27 кодов регионов, номера от 0001 до 9999 и 144 серии. Для каждого номерного знака доступна страница с данными об операциях с транспортным средством из открытой базы МВД Украины." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "В буквенных сочетаниях используются только буквы украинской кириллицы, имеющие графические аналоги в латинице: А, В, Е, І, К, М, Н, О, Р, С, Т, Х." })] })
				})]
			})
		]
	});
}
//#endregion
export { HomePage as t };
