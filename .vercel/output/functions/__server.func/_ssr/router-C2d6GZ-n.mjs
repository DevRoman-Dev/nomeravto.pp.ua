import { r as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { a as isValidPlate, c as toCyrillicPlate, l as toLatinPlate, o as parsePlate, r as findRegion, s as regionName, t as REGIONS } from "./plates-DEmAvcbq.mjs";
import { i as require_jsx_runtime, n as QueryClientProvider, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as t, t as SiteLayout } from "./SiteLayout-BIt5SdpN.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-B0AhRYj0.js
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
function softwareLd(lang, name) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name,
		operatingSystem: "Any",
		applicationCategory: "UtilitiesApplication",
		url: absoluteUrl(lang === "uk" ? "/" : "/ru"),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			ratingCount: "12540"
		},
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "UAH"
		}
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C2d6GZ-n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CT0WsHMo.css";
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
var Route$22 = createRootRouteWithContext()({
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
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$19 = () => import("./routes-_06NttTl.mjs");
var Route$21 = createFileRoute("/")({
	head: () => {
		const title = "Номерні знаки України — NOMERAVTO.PP.UA";
		const description = "Повний каталог номерних знаків України. Перевірка авто за держномером безкоштовно. Всі коди регіонів та серії.";
		return seoHead({
			lang: "uk",
			title,
			description,
			path: "/",
			altPath: "/ru",
			jsonLd: [
				breadcrumbLd([{
					name: "Головна",
					item: "/"
				}]),
				siteLd("uk", "Номерні знаки України", description),
				softwareLd("uk", "Перевірка номерних знаків України")
			]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var DOMAIN = "https://nomeravto.pp.ua";
var BLOG_SLUGS = [
	"region-codes",
	"check-accidents",
	"plate-colors"
];
var Route$20 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
	const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const staticPaths = [
		{
			path: "/",
			priority: "1.0",
			changefreq: "daily"
		},
		{
			path: "/ru",
			priority: "1.0",
			changefreq: "daily"
		},
		{
			path: "/blog",
			priority: "0.8",
			changefreq: "weekly"
		},
		{
			path: "/ru/blog",
			priority: "0.8",
			changefreq: "weekly"
		},
		{
			path: "/sitemap",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/ru/sitemap",
			priority: "0.7",
			changefreq: "monthly"
		}
	];
	const blogPaths = BLOG_SLUGS.flatMap((slug) => [{
		path: `/blog/${slug}`,
		priority: "0.8",
		changefreq: "monthly"
	}, {
		path: `/ru/blog/${slug}`,
		priority: "0.8",
		changefreq: "monthly"
	}]);
	const regionPaths = REGIONS.flatMap((r) => [
		{
			path: `/region/${r.code}`,
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: `/ru/region/${r.code}`,
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: `/sitemap/${r.code}`,
			priority: "0.6",
			changefreq: "monthly"
		},
		{
			path: `/ru/sitemap/${r.code}`,
			priority: "0.6",
			changefreq: "monthly"
		}
	]);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		...staticPaths,
		...blogPaths,
		...regionPaths
	].map((p) => `  <url>
    <loc>${DOMAIN}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=86400"
	} });
} } } });
var $$splitComponentImporter$18 = () => import("./blog.index-BW8UIV0F.mjs");
var Route$19 = createFileRoute("/blog/")({
	head: () => seoHead({
		lang: "uk",
		title: "Довідник автомобіліста — статті про номерні знаки",
		description: "Корисні статті про номерні знаки, перевірку автомобілів та історію транспортних засобів в Україні.",
		path: "/blog",
		altPath: "/ru/blog",
		jsonLd: [breadcrumbLd([{
			name: "Головна",
			item: "/"
		}, {
			name: "Блог",
			item: "/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var TITLE$5 = "Як перевірити авто на ДТП та арешти безкоштовно";
var $$splitComponentImporter$17 = () => import("./blog.check-accidents-CM5T8VQ9.mjs");
var DESC$5 = "Безкоштовні та платні способи перевірити авто перед купівлею: перевірка за VIN, держномером, відкрита база МВС, реєстр заставного майна та арешти.";
var Route$18 = createFileRoute("/blog/check-accidents")({
	head: () => seoHead({
		lang: "uk",
		title: TITLE$5,
		description: DESC$5,
		path: "/blog/check-accidents",
		altPath: "/ru/blog/check-accidents",
		jsonLd: [breadcrumbLd([
			{
				name: "Головна",
				item: "/"
			},
			{
				name: "Блог",
				item: "/blog"
			},
			{
				name: TITLE$5,
				item: "/blog/check-accidents"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var TITLE$4 = "Що означають кольорові номерні знаки в Україні";
var $$splitComponentImporter$16 = () => import("./blog.plate-colors-DITUsciD.mjs");
var DESC$4 = "Розшифровка чорних, жовтих, синіх, червоних та білих номерних знаків України. Хто і на яких підставах ними користується, та що означає кожен колір.";
var Route$17 = createFileRoute("/blog/plate-colors")({
	head: () => seoHead({
		lang: "uk",
		title: TITLE$4,
		description: DESC$4,
		path: "/blog/plate-colors",
		altPath: "/ru/blog/plate-colors",
		jsonLd: [breadcrumbLd([
			{
				name: "Головна",
				item: "/"
			},
			{
				name: "Блог",
				item: "/blog"
			},
			{
				name: TITLE$4,
				item: "/blog/plate-colors"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var TITLE$3 = "Коди регіонів України 2004-2024: повна таблиця";
var $$splitComponentImporter$15 = () => import("./blog.region-codes-DgleGD-3.mjs");
var DESC$3 = "Повна таблиця кодів номерних знаків України. Як визначити область реєстрації за першими літерами номера. Усі зміни та нові коди (ЕД, DC, DI тощо).";
var Route$16 = createFileRoute("/blog/region-codes")({
	head: () => seoHead({
		lang: "uk",
		title: TITLE$3,
		description: DESC$3,
		path: "/blog/region-codes",
		altPath: "/ru/blog/region-codes",
		jsonLd: [breadcrumbLd([
			{
				name: "Головна",
				item: "/"
			},
			{
				name: "Блог",
				item: "/blog"
			},
			{
				name: TITLE$3,
				item: "/blog/region-codes"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./nomer._plate-D4iVt4PG.mjs");
var Route$15 = createFileRoute("/nomer/$plate")({
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
			jsonLd: [
				breadcrumbLd([
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
				]),
				softwareLd("uk", "Перевірка номерних знаків України"),
				{
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
				}
			]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./region._code-BAqPJqU_.mjs");
var Route$14 = createFileRoute("/region/$code")({
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
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./ru.index-CibsNE1s.mjs");
var Route$13 = createFileRoute("/ru/")({
	head: () => {
		const title = "Номерные знаки Украины — NOMERAVTO.PP.UA";
		const description = "Полный каталог номерных знаков Украины. Проверка авто по госномеру бесплатно. Все коды регионов и серии.";
		return seoHead({
			lang: "ru",
			title,
			description,
			path: "/ru",
			altPath: "/",
			jsonLd: [
				breadcrumbLd([{
					name: "Главная",
					item: "/ru"
				}]),
				siteLd("ru", "Номерные знаки Украины", description),
				softwareLd("ru", "Проверка номерных знаков Украины")
			]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./sitemap.index-nh91xA6j.mjs");
var Route$12 = createFileRoute("/sitemap/")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => seoHead({
		lang: "uk",
		title: "Карта сайту",
		description: "Повна карта сайту автомобільних номерів України",
		path: "/sitemap",
		altPath: "/ru/sitemap"
	})
});
var $$splitComponentImporter$10 = () => import("./ru.blog.index-8jLVlgP8.mjs");
var Route$11 = createFileRoute("/ru/blog/")({
	head: () => seoHead({
		lang: "ru",
		title: "Справочник автомобилиста — статьи про номерные знаки",
		description: "Полезные статьи про номерные знаки, проверку автомобилей и историю транспортных средств в Украине.",
		path: "/ru/blog",
		altPath: "/blog",
		jsonLd: [breadcrumbLd([{
			name: "Главная",
			item: "/ru"
		}, {
			name: "Блог",
			item: "/ru/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var TITLE$2 = "Как проверить авто на ДТП и аресты бесплатно";
var $$splitComponentImporter$9 = () => import("./ru.blog.check-accidents-BbQSyt3I.mjs");
var DESC$2 = "Бесплатные и платные способы проверить авто перед покупкой: проверка по VIN, госномеру, открытая база МВД, реестр залогового имущества и аресты.";
var Route$10 = createFileRoute("/ru/blog/check-accidents")({
	head: () => seoHead({
		lang: "ru",
		title: TITLE$2,
		description: DESC$2,
		path: "/ru/blog/check-accidents",
		altPath: "/blog/check-accidents",
		jsonLd: [breadcrumbLd([
			{
				name: "Главная",
				item: "/ru"
			},
			{
				name: "Блог",
				item: "/ru/blog"
			},
			{
				name: TITLE$2,
				item: "/ru/blog/check-accidents"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var TITLE$1 = "Что означают цветные номерные знаки в Украине";
var $$splitComponentImporter$8 = () => import("./ru.blog.plate-colors-BP1svn2s.mjs");
var DESC$1 = "Расшифровка черных, желтых, синих, красных и белых номерных знаков Украины. Кто и на каких основаниях ими пользуется, и что означает каждый цвет.";
var Route$9 = createFileRoute("/ru/blog/plate-colors")({
	head: () => seoHead({
		lang: "ru",
		title: TITLE$1,
		description: DESC$1,
		path: "/ru/blog/plate-colors",
		altPath: "/blog/plate-colors",
		jsonLd: [breadcrumbLd([
			{
				name: "Главная",
				item: "/ru"
			},
			{
				name: "Блог",
				item: "/ru/blog"
			},
			{
				name: TITLE$1,
				item: "/ru/blog/plate-colors"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var TITLE = "Коды регионов Украины 2004-2024: полная таблица";
var $$splitComponentImporter$7 = () => import("./ru.blog.region-codes-C7hGVhfI.mjs");
var DESC = "Полная таблица кодов номерных знаков Украины. Как определить область регистрации по первым буквам номера. Все изменения и новые коды (ЕД, DC, DI).";
var Route$8 = createFileRoute("/ru/blog/region-codes")({
	head: () => seoHead({
		lang: "ru",
		title: TITLE,
		description: DESC,
		path: "/ru/blog/region-codes",
		altPath: "/blog/region-codes",
		jsonLd: [breadcrumbLd([
			{
				name: "Главная",
				item: "/ru"
			},
			{
				name: "Блог",
				item: "/ru/blog"
			},
			{
				name: TITLE,
				item: "/ru/blog/region-codes"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./ru.nomer._plate-DNRWQDoX.mjs");
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
			jsonLd: [
				breadcrumbLd([
					{
						name: "Главная",
						item: "/ru"
					},
					{
						name: "Регионы",
						item: "/ru/#regions"
					},
					...region ? [{
						name,
						item: `/ru/region/${region.code}`
					}] : [],
					{
						name: cyr,
						item: `/ru/nomer/${latin}`
					}
				]),
				softwareLd("ru", "Проверка номерных знаков Украины"),
				{
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
				}
			]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./ru.region._code-DSIccjFq.mjs");
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
var $$splitComponentImporter$4 = () => import("./ru.sitemap.index-kfdjgPg5.mjs");
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
var $$splitComponentImporter$3 = () => import("./sitemap._code.index-mCfnSUPL.mjs");
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
var $$splitComponentImporter$2 = () => import("./sitemap._code._series-3wboohAK.mjs");
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
var $$splitComponentImporter$1 = () => import("./ru.sitemap._code.index-DW7cj7ob.mjs");
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
var $$splitComponentImporter = () => import("./ru.sitemap._code._series-BiRiDOiB.mjs");
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
var IndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$22
});
var SitemapDotxmlRoute = Route$20.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$22
});
var BlogIndexRoute = Route$19.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$22
});
var BlogCheckAccidentsRoute = Route$18.update({
	id: "/blog/check-accidents",
	path: "/blog/check-accidents",
	getParentRoute: () => Route$22
});
var BlogPlateColorsRoute = Route$17.update({
	id: "/blog/plate-colors",
	path: "/blog/plate-colors",
	getParentRoute: () => Route$22
});
var BlogRegionCodesRoute = Route$16.update({
	id: "/blog/region-codes",
	path: "/blog/region-codes",
	getParentRoute: () => Route$22
});
var NomerPlateRoute = Route$15.update({
	id: "/nomer/$plate",
	path: "/nomer/$plate",
	getParentRoute: () => Route$22
});
var RegionCodeRoute = Route$14.update({
	id: "/region/$code",
	path: "/region/$code",
	getParentRoute: () => Route$22
});
var RuIndexRoute = Route$13.update({
	id: "/ru/",
	path: "/ru/",
	getParentRoute: () => Route$22
});
var SitemapIndexRoute = Route$12.update({
	id: "/sitemap/",
	path: "/sitemap/",
	getParentRoute: () => Route$22
});
var RuBlogIndexRoute = Route$11.update({
	id: "/ru/blog/",
	path: "/ru/blog/",
	getParentRoute: () => Route$22
});
var RuBlogCheckAccidentsRoute = Route$10.update({
	id: "/ru/blog/check-accidents",
	path: "/ru/blog/check-accidents",
	getParentRoute: () => Route$22
});
var RuBlogPlateColorsRoute = Route$9.update({
	id: "/ru/blog/plate-colors",
	path: "/ru/blog/plate-colors",
	getParentRoute: () => Route$22
});
var RuBlogRegionCodesRoute = Route$8.update({
	id: "/ru/blog/region-codes",
	path: "/ru/blog/region-codes",
	getParentRoute: () => Route$22
});
var RuNomerPlateRoute = Route$7.update({
	id: "/ru/nomer/$plate",
	path: "/ru/nomer/$plate",
	getParentRoute: () => Route$22
});
var RuRegionCodeRoute = Route$6.update({
	id: "/ru/region/$code",
	path: "/ru/region/$code",
	getParentRoute: () => Route$22
});
var RuSitemapIndexRoute = Route$5.update({
	id: "/ru/sitemap/",
	path: "/ru/sitemap/",
	getParentRoute: () => Route$22
});
var SitemapCodeIndexRoute = Route$4.update({
	id: "/sitemap/$code/",
	path: "/sitemap/$code/",
	getParentRoute: () => Route$22
});
var SitemapCodeSeriesRoute = Route$3.update({
	id: "/sitemap/$code/$series",
	path: "/sitemap/$code/$series",
	getParentRoute: () => Route$22
});
var ApiOgPlatePlateRoute = Route$2.update({
	id: "/api/og/plate/$plate",
	path: "/api/og/plate/$plate",
	getParentRoute: () => Route$22
});
var RuSitemapCodeIndexRoute = Route$1.update({
	id: "/ru/sitemap/$code/",
	path: "/ru/sitemap/$code/",
	getParentRoute: () => Route$22
});
var rootRouteChildren = {
	IndexRoute,
	SitemapDotxmlRoute,
	BlogCheckAccidentsRoute,
	BlogPlateColorsRoute,
	BlogRegionCodesRoute,
	NomerPlateRoute,
	RegionCodeRoute,
	BlogIndexRoute,
	RuIndexRoute,
	SitemapIndexRoute,
	RuBlogCheckAccidentsRoute,
	RuBlogPlateColorsRoute,
	RuBlogRegionCodesRoute,
	RuNomerPlateRoute,
	RuRegionCodeRoute,
	SitemapCodeSeriesRoute,
	RuBlogIndexRoute,
	RuSitemapIndexRoute,
	SitemapCodeIndexRoute,
	ApiOgPlatePlateRoute,
	RuSitemapCodeSeriesRoute: Route.update({
		id: "/ru/sitemap/$code/$series",
		path: "/ru/sitemap/$code/$series",
		getParentRoute: () => Route$22
	}),
	RuSitemapCodeIndexRoute
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { Route$4 as a, TITLE as c, Route$14 as d, Route$15 as f, PlateSearch as g, TITLE$5 as h, Route$3 as i, TITLE$1 as l, TITLE$4 as m, Route as n, Route$6 as o, TITLE$3 as p, Route$1 as r, Route$7 as s, router_exports as t, TITLE$2 as u };
