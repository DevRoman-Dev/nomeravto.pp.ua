import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-BIt5SdpN.mjs";
import { g as PlateSearch } from "./router-C2d6GZ-n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BlogArticleLayout-squaCeMU.js
var import_jsx_runtime = require_jsx_runtime();
function BlogArticleLayout({ lang, title, slug, children }) {
	const base = lang === "uk" ? "" : "/ru";
	const alt = lang === "uk" ? `/ru/blog/${slug}` : `/blog/${slug}`;
	const breadcrumbs = [{
		label: t("navBlog", lang),
		href: `${base}/blog`
	}, {
		label: title,
		href: ""
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: alt,
		breadcrumbs,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel mx-auto max-w-3xl px-5 py-7 sm:px-8 sm:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-8 text-3xl font-bold leading-tight sm:text-4xl text-foreground",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-sm sm:prose-base dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-10 border-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-xl font-semibold text-foreground",
							children: lang === "uk" ? "Перевірити авто прямо зараз" : "Проверить авто прямо сейчас"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-sm text-muted-foreground",
							children: lang === "uk" ? "Дізнайтеся історію автомобіля, марку, модель та рік випуску за державним номером абсолютно безкоштовно." : "Узнайте историю автомобиля, марку, модель и год выпуска по государственному номеру абсолютно бесплатно."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateSearch, { lang })
					]
				})
			]
		})
	});
}
//#endregion
export { BlogArticleLayout as t };
