import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
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
export { fieldLabel as n, t as r, SiteLayout as t };
