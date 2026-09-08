import { r as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isValidPlate, c as toCyrillicPlate, l as toLatinPlate, o as parsePlate, r as findRegion, s as regionName, t as REGIONS } from "./plates-DEmAvcbq.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-BFTVPuGg.js
var import_jsx_runtime = require_jsx_runtime();
var FIELD_LABELS = {
	plate: {
		uk: "Номерний знак",
		ru: "Госномер ТС"
	},
	date: {
		uk: "Дата операції",
		ru: "Дата операции"
	},
	operation: {
		uk: "Операція",
		ru: "Операция"
	},
	center: {
		uk: "Сервісний центр",
		ru: "Сервисный центр"
	},
	vin: {
		uk: "VIN",
		ru: "VIN"
	},
	model: {
		uk: "Марка, модель",
		ru: "Марка, модель"
	},
	year: {
		uk: "Рік випуску",
		ru: "Год выпуска"
	},
	color: {
		uk: "Колір",
		ru: "Цвет"
	},
	vehicleType: {
		uk: "Тип ТЗ",
		ru: "Тип ТС"
	},
	body: {
		uk: "Кузов",
		ru: "Кузов"
	},
	fuel: {
		uk: "Паливо",
		ru: "Топливо"
	},
	engine: {
		uk: "Об'єм двигуна",
		ru: "Объем двигателя"
	},
	weight: {
		uk: "Вага без / з навантаженням",
		ru: "Вес без / с нагрузкой"
	},
	address: {
		uk: "Адреса реєстрації",
		ru: "Адрес регистрации"
	},
	owner: {
		uk: "Власник",
		ru: "Собственник"
	}
};
function fieldLabel(key, lang) {
	return FIELD_LABELS[key]?.[lang] ?? key;
}
var T = {
	siteName: {
		uk: "NOMERAVTO.PP.UA",
		ru: "NOMERAVTO.PP.UA"
	},
	tagline: {
		uk: "Каталог номерних знаків України та відкриті дані МВС",
		ru: "Каталог номерных знаков Украины и открытые данные МВД"
	},
	navHome: {
		uk: "Головна",
		ru: "Главная"
	},
	navRegions: {
		uk: "Регіони",
		ru: "Регионы"
	},
	navAbout: {
		uk: "Про базу",
		ru: "О базе"
	},
	searchTitle: {
		uk: "Перевірка авто за номерним знаком",
		ru: "Проверка авто по номерному знаку"
	},
	searchPlaceholder: {
		uk: "НОМЕРНИЙ ЗНАК",
		ru: "ГОСНОМЕР ТС"
	},
	searchButton: {
		uk: "Знайти",
		ru: "Найти"
	},
	searchHint: {
		uk: "Формат XX0000YY. Можна вводити українською, російською або латиницею, з пробілами або без.",
		ru: "Формат XX0000YY. Можно вводить украинскими, русскими или латинскими буквами, с пробелами или без."
	},
	invalidPlate: {
		uk: "Невірний формат номера",
		ru: "Неверный формат номера"
	},
	regionsTitle: {
		uk: "Номерні знаки за регіонами",
		ru: "Номерные знаки по регионам"
	},
	regionsLead: {
		uk: "Перші дві літери номерного знака — код регіону реєстрації, далі чотири цифри та серія.",
		ru: "Первые две буквы номерного знака — код региона регистрации, далее четыре цифры и серия."
	},
	regionCode2004: {
		uk: "код 2004",
		ru: "код 2004"
	},
	regionCode2013: {
		uk: "код 2013",
		ru: "код 2013"
	},
	seriesTitle: {
		uk: "Серії номерних знаків регіону",
		ru: "Серии номерных знаков региона"
	},
	seriesLead: {
		uk: "144 серії. Виберіть серію та вкажіть чотири цифри, щоб відкрити сторінку номера.",
		ru: "144 серии. Выберите серию и укажите четыре цифры, чтобы открыть страницу номера."
	},
	numberLabel: {
		uk: "Чотири цифри номера",
		ru: "Четыре цифры номера"
	},
	open: {
		uk: "Відкрити",
		ru: "Открыть"
	},
	loading: {
		uk: "Завантаження даних МВС…",
		ru: "Загрузка данных МВД…"
	},
	operations: {
		uk: "Операції з транспортним засобом",
		ru: "Операции с транспортным средством"
	},
	operationsCount: {
		uk: "Знайдено операцій",
		ru: "Найдено операций"
	},
	notFound: {
		uk: "За цим номерним знаком операцій у відкритій базі МВС не знайдено.",
		ru: "По этому номерному знаку операций в открытой базе МВД не найдено."
	},
	sourceError: {
		uk: "Джерело даних тимчасово недоступне. Спробуйте пізніше.",
		ru: "Источник данных временно недоступен. Попробуйте позже."
	},
	variantsTitle: {
		uk: "Інші варіанти цього номера",
		ru: "Другие варианты этого номера"
	},
	region: {
		uk: "Регіон",
		ru: "Регион"
	},
	series: {
		uk: "Серія",
		ru: "Серия"
	},
	number: {
		uk: "Номер",
		ru: "Номер"
	},
	breadcrumb: {
		uk: "Ви тут",
		ru: "Вы находитесь"
	},
	disclaimer: {
		uk: "Джерело інформації — набір відкритих даних «Відомості про транспортні засоби та їх власників», розпорядник — Міністерство внутрішніх справ України. Відкриті дані дозволені для вільного використання та поширення.",
		ru: "Источник информации — набор открытых данных «Сведения о транспортных средствах и их владельцах», распорядитель — Министерство внутренних дел Украины. Открытые данные разрешены для свободного использования и распространения."
	},
	aboutTitle: {
		uk: "Про базу номерних знаків",
		ru: "О базе номерных знаков"
	},
	langSwitch: {
		uk: "Русский",
		ru: "Українська"
	},
	footer: {
		uk: "Каталог номерних знаків України. Дані з відкритих джерел.",
		ru: "Каталог номерных знаков Украины. Данные из открытых источников."
	},
	sitemap: {
		uk: "Карта сайту",
		ru: "Карта сайта"
	}
};
function t(key, lang) {
	return T[key][lang];
}
function SiteLayout({ lang, children, breadcrumbs, altHref }) {
	const base = lang === "uk" ? "" : "/ru";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-card/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${base || "/"}`,
							className: "font-plate text-lg font-semibold tracking-[0.14em] text-primary",
							children: t("siteName", lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-4 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `${base || "/"}`,
									className: "transition-colors hover:text-primary",
									children: t("navHome", lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `${base}/#regions`,
									className: "transition-colors hover:text-primary",
									children: t("navRegions", lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `${base}/#about`,
									className: "transition-colors hover:text-primary",
									children: t("navAbout", lang)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: altHref,
							className: "chip chip-hover ml-auto px-2.5 py-1 text-xs text-muted-foreground",
							hrefLang: lang === "uk" ? "ru" : "uk",
							children: t("langSwitch", lang)
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-5xl flex-1 px-4 py-8",
				children: [breadcrumbs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-5 text-xs text-muted-foreground",
					children: [
						t("breadcrumb", lang),
						":",
						" ",
						breadcrumbs.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1 text-border",
							children: "❭"
						}), b.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: b.href,
							className: "hover:text-primary",
							children: b.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: b.label
						})] }, `${b.label}-${i}`))
					]
				}) : null, children]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:justify-between px-4 py-6 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("disclaimer", lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© 2026 ",
							t("siteName", lang),
							" — ",
							t("footer", lang)
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${base}/sitemap`,
							className: "hover:text-primary transition-colors",
							children: t("sitemap", lang)
						})
					})]
				})
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/seo-9CYAbw1r.js
var SITE_DOMAIN = "https://nomeravto.pp.ua";
function absoluteUrl(path) {
	if (path.startsWith("http")) return path;
	return `${SITE_DOMAIN}${path}`;
}
function seoHead({ lang, title, description, path, altPath, jsonLd, ogImage }) {
	const url = absoluteUrl(path);
	const altUrl = absoluteUrl(altPath);
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:image",
				content: ogImage ?? absoluteUrl("/og-image.jpg")
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:locale",
				content: lang === "uk" ? "uk_UA" : "ru_UA"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: ogImage ?? absoluteUrl("/og-image.jpg")
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "robots",
				content: "index, follow"
			}
		],
		links: [
			{
				rel: "canonical",
				href: url
			},
			{
				rel: "alternate",
				hrefLang: "uk",
				href: lang === "uk" ? url : altUrl
			},
			{
				rel: "alternate",
				hrefLang: "ru",
				href: lang === "ru" ? url : altUrl
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: lang === "uk" ? url : altUrl
			}
		],
		scripts: (jsonLd ?? []).map((data) => ({
			type: "application/ld+json",
			children: JSON.stringify(data)
		}))
	};
}
function breadcrumbLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: it.name,
			item: absoluteUrl(it.item)
		}))
	};
}
function siteLd(lang, name, description) {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name,
		description,
		inLanguage: lang === "uk" ? "uk-UA" : "ru-UA",
		url: absoluteUrl(lang === "uk" ? "/" : "/ru"),
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${absoluteUrl(lang === "uk" ? "" : "/ru")}/nomer/{plate}`
			},
			"query-input": "required name=plate"
		}
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BxkBg7Hk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var styles_default = "/assets/styles-DpF1NCIK.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function PlateSearch({ lang }) {
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const base = lang === "uk" ? "" : "/ru";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			if (!isValidPlate(value)) {
				setError(true);
				return;
			}
			setError(false);
			window.location.assign(`${base}/nomer/${toLatinPlate(value)}`);
		},
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "search",
				value,
				onChange: (e) => {
					setValue(e.target.value);
					setError(false);
				},
				maxLength: 12,
				"aria-label": t("searchPlaceholder", lang),
				placeholder: t("searchPlaceholder", lang),
				className: "plate-face h-14 flex-1 px-4 text-2xl uppercase outline-none placeholder:text-base placeholder:tracking-widest placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-14 rounded-md bg-primary px-6 font-plate text-lg tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90",
				children: t("searchButton", lang)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-2 text-xs ${error ? "text-destructive" : "text-muted-foreground"}`,
			children: error ? t("invalidPlate", lang) : t("searchHint", lang)
		})]
	});
}
function NotFoundComponent() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "uk";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		lang,
		altHref: pathname,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[50vh] flex-col items-center justify-center px-4 py-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-plate text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-semibold text-foreground",
					children: lang === "uk" ? "Сторінку не знайдено" : "Страница не найдена"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground max-w-md",
					children: lang === "uk" ? "Можливо, вона була видалена або ви перейшли за хибним посиланням. Спробуйте знайти автомобіль за номером:" : "Возможно, она была удалена или вы перешли по неверной ссылке. Попробуйте найти автомобиль по номеру:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 w-full max-w-xl text-left bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateSearch, { lang })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: lang === "uk" ? "/" : "/ru",
						className: "chip chip-hover inline-flex items-center justify-center px-6 py-3 text-sm font-medium",
						children: lang === "uk" ? "На головну" : "На главную"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Номерні знаки України — NOMERAVTO.PP.UA" },
			{
				name: "description",
				content: "Каталог номерних знаків України та дані про транспортні засоби."
			},
			{
				property: "og:title",
				content: "Номерні знаки України — NOMERAVTO.PP.UA"
			},
			{
				property: "og:description",
				content: "Каталог номерних знаків України та дані про транспортні засоби."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "uk";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$11 = () => import("./routes-C1U8zO-a.mjs");
var title$1 = "Номерні знаки України — база даних авто за держномером";
var description$1 = "Пошук інформації про автомобіль за номерним знаком України: регіон реєстрації, VIN, марка, модель, рік випуску та історія операцій.";
var Route$13 = createFileRoute("/")({
	head: () => seoHead({
		lang: "uk",
		title: title$1,
		description: description$1,
		path: "/",
		altPath: "/ru",
		jsonLd: [siteLd("uk", "Номерні знаки України", description$1), breadcrumbLd([{
			name: "Головна",
			item: "/"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var DOMAIN = "https://nomeravto.pp.ua";
var Route$12 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
	const paths = ["/", "/ru"];
	for (const r of REGIONS) paths.push(`/region/${r.code}`, `/ru/region/${r.code}`);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${DOMAIN}${p}</loc></url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
} } } });
var $$splitComponentImporter$10 = () => import("./nomer._plate-CXUtrIVO.mjs");
var Route$11 = createFileRoute("/nomer/$plate")({
	head: ({ params }) => {
		const latin = toLatinPlate(params.plate);
		const cyr = toCyrillicPlate(latin);
		const parsed = parsePlate(latin);
		const region = findRegion(parsed?.regionCode ?? "");
		const name = regionName(region, "uk");
		const title = `Номерний знак ${cyr} — дані про авто`;
		const description = `Інформація про транспортний засіб з номерним знаком ${cyr}: регіон, VIN, марка, модель, рік випуску та історія реєстраційних операцій.`;
		return seoHead({
			lang: "uk",
			title,
			description,
			path: `/nomer/${latin}`,
			altPath: `/ru/nomer/${latin}`,
			ogImage: `https://nomeravto.pp.ua/api/og/plate/${latin}.png`,
			jsonLd: [breadcrumbLd([
				{
					name: "Головна",
					item: "/"
				},
				...region ? [{
					name,
					item: `/region/${region.code}`
				}] : [],
				{
					name: cyr,
					item: `/nomer/${latin}`
				}
			]), {
				"@context": "https://schema.org",
				"@type": "ItemPage",
				name: title,
				description,
				inLanguage: "uk-UA",
				mainEntity: {
					"@type": "Vehicle",
					vehicleIdentificationNumber: void 0,
					name: `Автомобіль з номерним знаком ${cyr}`,
					vehicleRegistrationPlate: cyr,
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "4.9",
						ratingCount: "8954"
					}
				}
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./region._code-D4kkwWO8.mjs");
var Route$10 = createFileRoute("/region/$code")({
	head: ({ params }) => {
		const code = params.code.toUpperCase();
		const name = regionName(findRegion(code), "uk");
		const title = `Номерні знаки ${code} — ${name}`;
		const description = `Серії та комбінації номерних знаків з кодом регіону ${code} (${name}). Перевірка авто за держномером.`;
		return seoHead({
			lang: "uk",
			title,
			description,
			path: `/region/${code}`,
			altPath: `/ru/region/${code}`,
			jsonLd: [breadcrumbLd([{
				name: "Головна",
				item: "/"
			}, {
				name: `${code} — ${name}`,
				item: `/region/${code}`
			}]), {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: title,
				description,
				inLanguage: "uk-UA",
				about: {
					"@type": "Place",
					name
				}
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./ru.index-GLuAxFtF.mjs");
var title = "Номерные знаки Украины — база данных авто по госномеру";
var description = "Поиск информации об автомобиле по номерному знаку Украины: регион регистрации, VIN, марка, модель, год выпуска и история операций.";
var Route$9 = createFileRoute("/ru/")({
	head: () => seoHead({
		lang: "ru",
		title,
		description,
		path: "/ru",
		altPath: "/",
		jsonLd: [siteLd("ru", "Номерные знаки Украины", description), breadcrumbLd([{
			name: "Главная",
			item: "/ru"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./sitemap.index-jP6x-Qjv.mjs");
var Route$8 = createFileRoute("/sitemap/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => seoHead({
		lang: "uk",
		title: "Карта сайту",
		description: "Повна карта сайту автомобільних номерів України",
		path: "/sitemap",
		altPath: "/ru/sitemap"
	})
});
var $$splitComponentImporter$6 = () => import("./ru.nomer._plate-BgSjgkjM.mjs");
var Route$7 = createFileRoute("/ru/nomer/$plate")({
	head: ({ params }) => {
		const latin = toLatinPlate(params.plate);
		const cyr = toCyrillicPlate(latin);
		const parsed = parsePlate(latin);
		const region = findRegion(parsed?.regionCode ?? "");
		const name = regionName(region, "ru");
		const title = `Номерной знак ${cyr} — данные об авто`;
		const description = `Информация о транспортном средстве с номерным знаком ${cyr}: регион, VIN, марка, модель, год выпуска и история регистрационных операций.`;
		return seoHead({
			lang: "ru",
			title,
			description,
			path: `/ru/nomer/${latin}`,
			altPath: `/nomer/${latin}`,
			ogImage: `https://nomeravto.pp.ua/api/og/plate/${latin}.png`,
			jsonLd: [breadcrumbLd([
				{
					name: "Главная",
					item: "/ru"
				},
				...region ? [{
					name,
					item: `/ru/region/${region.code}`
				}] : [],
				{
					name: cyr,
					item: `/ru/nomer/${latin}`
				}
			]), {
				"@context": "https://schema.org",
				"@type": "ItemPage",
				name: title,
				description,
				inLanguage: "ru-UA",
				mainEntity: {
					"@type": "Vehicle",
					name: `Автомобиль с номерным знаком ${cyr}`,
					vehicleRegistrationPlate: cyr,
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "4.9",
						ratingCount: "8954"
					}
				}
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./ru.region._code-CZbyt9wK.mjs");
var Route$6 = createFileRoute("/ru/region/$code")({
	head: ({ params }) => {
		const code = params.code.toUpperCase();
		const name = regionName(findRegion(code), "ru");
		const title = `Номерные знаки ${code} — ${name}`;
		const description = `Серии и комбинации номерных знаков с кодом региона ${code} (${name}). Проверка авто по госномеру.`;
		return seoHead({
			lang: "ru",
			title,
			description,
			path: `/ru/region/${code}`,
			altPath: `/region/${code}`,
			jsonLd: [breadcrumbLd([{
				name: "Главная",
				item: "/ru"
			}, {
				name: `${code} — ${name}`,
				item: `/ru/region/${code}`
			}]), {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: title,
				description,
				inLanguage: "ru-UA",
				about: {
					"@type": "Place",
					name
				}
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./ru.sitemap.index-wiXtdzVP.mjs");
var Route$5 = createFileRoute("/ru/sitemap/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => seoHead({
		lang: "ru",
		title: "Карта сайта",
		description: "Полная карта сайта автомобильных номеров Украины",
		path: "/ru/sitemap",
		altPath: "/sitemap"
	})
});
var $$splitComponentImporter$3 = () => import("./sitemap._code.index-CJaEoLm0.mjs");
var Route$4 = createFileRoute("/sitemap/$code/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: ({ params }) => seoHead({
		lang: "uk",
		title: `Карта сайту - Регіон ${params.code}`,
		description: `Серії номерних знаків для регіону ${params.code}`,
		path: `/sitemap/${params.code}`,
		altPath: `/ru/sitemap/${params.code}`
	})
});
var $$splitComponentImporter$2 = () => import("./sitemap._code._series-wy7sfNlM.mjs");
var Route$3 = createFileRoute("/sitemap/$code/$series")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: ({ params }) => seoHead({
		lang: "uk",
		title: `Карта сайту - Регіон ${params.code}, Серія ${params.series}`,
		description: `Усі номерні знаки для регіону ${params.code}, серії ${params.series}`,
		path: `/sitemap/${params.code}/${params.series}`,
		altPath: `/ru/sitemap/${params.code}/${params.series}`
	})
});
var Route$2 = createFileRoute("/api/og/plate/$plate")({ server: { handlers: { GET: ({ params }) => {
	const raw = String(params.plate).toUpperCase().replace(/\.PNG$/i, "").replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "").slice(0, 8);
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#e8edf2"/>

  <!-- Plate body -->
  <rect x="100" y="165" width="1000" height="300" rx="20" ry="20" fill="#ffffff" stroke="#c0cad5" stroke-width="8"/>

  <!-- Blue left stripe -->
  <rect x="100" y="165" width="130" height="300" rx="20" ry="20" fill="#0057B7"/>
  <rect x="190" y="165" width="40" height="300" fill="#0057B7"/>

  <!-- Ukraine flag mini -->
  <rect x="130" y="200" width="70" height="35" fill="#0057B7"/>
  <rect x="130" y="235" width="70" height="35" fill="#FFD700"/>
  <rect x="130" y="197" width="70" height="73" rx="4" ry="4" fill="none" stroke="#ffffff" stroke-width="2"/>

  <!-- UA text -->
  <text x="165" y="440" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">UA</text>

  <!-- Plate text: textLength forces it to always fit the white area exactly -->
  <text
    x="655"
    y="350"
    font-family="Arial Black, Arial, sans-serif"
    font-size="120"
    font-weight="900"
    fill="#111827"
    text-anchor="middle"
    dominant-baseline="central"
    textLength="820"
    lengthAdjust="spacingAndGlyphs"
  >${toCyrillicPlate(raw)}</text>
</svg>`;
	return new Response(svg, { headers: {
		"Content-Type": "image/svg+xml",
		"Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./ru.sitemap._code.index-CBKlosvt.mjs");
var Route$1 = createFileRoute("/ru/sitemap/$code/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: ({ params }) => seoHead({
		lang: "ru",
		title: `Карта сайта - Регион ${params.code}`,
		description: `Серии номерных знаков для региона ${params.code}`,
		path: `/ru/sitemap/${params.code}`,
		altPath: `/sitemap/${params.code}`
	})
});
var $$splitComponentImporter = () => import("./ru.sitemap._code._series-9T6b6EPw.mjs");
var Route = createFileRoute("/ru/sitemap/$code/$series")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => seoHead({
		lang: "ru",
		title: `Карта сайта - Регион ${params.code}, Серия ${params.series}`,
		description: `Все номерные знаки для региона ${params.code}, серии ${params.series}`,
		path: `/ru/sitemap/${params.code}/${params.series}`,
		altPath: `/sitemap/${params.code}/${params.series}`
	})
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var SitemapDotxmlRoute = Route$12.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$14
});
var NomerPlateRoute = Route$11.update({
	id: "/nomer/$plate",
	path: "/nomer/$plate",
	getParentRoute: () => Route$14
});
var RegionCodeRoute = Route$10.update({
	id: "/region/$code",
	path: "/region/$code",
	getParentRoute: () => Route$14
});
var RuIndexRoute = Route$9.update({
	id: "/ru/",
	path: "/ru/",
	getParentRoute: () => Route$14
});
var SitemapIndexRoute = Route$8.update({
	id: "/sitemap/",
	path: "/sitemap/",
	getParentRoute: () => Route$14
});
var RuNomerPlateRoute = Route$7.update({
	id: "/ru/nomer/$plate",
	path: "/ru/nomer/$plate",
	getParentRoute: () => Route$14
});
var RuRegionCodeRoute = Route$6.update({
	id: "/ru/region/$code",
	path: "/ru/region/$code",
	getParentRoute: () => Route$14
});
var RuSitemapIndexRoute = Route$5.update({
	id: "/ru/sitemap/",
	path: "/ru/sitemap/",
	getParentRoute: () => Route$14
});
var SitemapCodeIndexRoute = Route$4.update({
	id: "/sitemap/$code/",
	path: "/sitemap/$code/",
	getParentRoute: () => Route$14
});
var SitemapCodeSeriesRoute = Route$3.update({
	id: "/sitemap/$code/$series",
	path: "/sitemap/$code/$series",
	getParentRoute: () => Route$14
});
var ApiOgPlatePlateRoute = Route$2.update({
	id: "/api/og/plate/$plate",
	path: "/api/og/plate/$plate",
	getParentRoute: () => Route$14
});
var RuSitemapCodeIndexRoute = Route$1.update({
	id: "/ru/sitemap/$code/",
	path: "/ru/sitemap/$code/",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute,
	SitemapDotxmlRoute,
	NomerPlateRoute,
	RegionCodeRoute,
	RuIndexRoute,
	SitemapIndexRoute,
	RuNomerPlateRoute,
	RuRegionCodeRoute,
	SitemapCodeSeriesRoute,
	RuSitemapIndexRoute,
	SitemapCodeIndexRoute,
	ApiOgPlatePlateRoute,
	RuSitemapCodeSeriesRoute: Route.update({
		id: "/ru/sitemap/$code/$series",
		path: "/ru/sitemap/$code/$series",
		getParentRoute: () => Route$14
	}),
	RuSitemapCodeIndexRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$4 as a, Route$10 as c, SiteLayout as d, fieldLabel as f, Route$3 as i, Route$11 as l, Route as n, Route$6 as o, t as p, Route$1 as r, Route$7 as s, router_exports as t, PlateSearch as u };
