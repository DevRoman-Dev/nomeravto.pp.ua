import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-BIt5SdpN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BlogPage-CL4EX5jg.js
var import_jsx_runtime = require_jsx_runtime();
var ARTICLES = [
	{
		slug: "region-codes",
		title: {
			uk: "Коди регіонів України 2004-2024",
			ru: "Коды регионов Украины 2004-2024"
		},
		desc: {
			uk: "Повна таблиця кодів номерних знаків України. Як визначити область реєстрації за першими літерами номера.",
			ru: "Полная таблица кодов номерных знаков Украины. Как определить область регистрации по первым буквам номера."
		}
	},
	{
		slug: "check-accidents",
		title: {
			uk: "Як перевірити авто на ДТП та арешти",
			ru: "Как проверить авто на ДТП и аресты"
		},
		desc: {
			uk: "Безкоштовні та платні способи перевірити історію автомобіля за державним номером перед покупкою.",
			ru: "Бесплатные и платные способы проверить историю автомобиля по государственному номеру перед покупкой."
		}
	},
	{
		slug: "plate-colors",
		title: {
			uk: "Що означають кольорові номерні знаки",
			ru: "Что означают цветные номерные знаки"
		},
		desc: {
			uk: "Розшифровка чорних, жовтих, синіх та червоних номерів. Хто і на яких підставах ними користується.",
			ru: "Расшифровка черных, желтых, синих и красных номеров. Кто и на каких основаниях ими пользуется."
		}
	}
];
function BlogPage({ lang }) {
	const base = lang === "uk" ? "" : "/ru";
	const alt = lang === "uk" ? "/ru/blog" : "/blog";
	const breadcrumbs = [{
		label: t("navBlog", lang),
		href: ""
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: alt,
		breadcrumbs,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel px-5 py-7 sm:px-8 sm:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold leading-tight sm:text-4xl",
					children: lang === "uk" ? "Довідник автомобіліста" : "Справочник автомобилиста"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: lang === "uk" ? "Корисні статті про номерні знаки, перевірку автомобілів та історію транспортних засобів в Україні." : "Полезные статьи про номерные знаки, проверку автомобилей и историю транспортных средств в Украине."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: ARTICLES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `${base}/blog/${a.slug}`,
						className: "group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
							children: a.title[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3",
							children: a.desc[lang]
						})]
					}, a.slug))
				})
			]
		})
	});
}
//#endregion
export { BlogPage as t };
