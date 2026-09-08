import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as regionName, t as REGIONS } from "./plates-DEmAvcbq.mjs";
import { d as SiteLayout, p as t, u as PlateSearch } from "./router-BxkBg7Hk.mjs";
import { t as PlateBadge } from "./PlateBadge-4rvfV-oc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HomePage-DbW52-zi.js
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
					className: "mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground",
					children: lang === "uk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Цей ресурс — повний структурований каталог усіх номерних знаків України стандарту 2004 та 2015 років. Кожна можлива комбінація у форматі ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "XX0000YY"
							}),
							" представлена окремою сторінкою: 27 регіональних кодів, числова частина від 0001 до 9999 і 144 серії — разом це понад 38 мільйонів унікальних номерів."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Для кожного номерного знака ми в режимі реального часу запитуємо відкриту базу МВС України та відображаємо всі наявні реєстраційні операції: первинну реєстрацію, зміни власника, перереєстрацію після ДТП, зняття з обліку тощо. Там, де дані є, ви побачите марку й модель автомобіля, рік випуску, тип кузова, об'єм двигателя, колір та регіон реєстрації." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Буквені частини українських номерів складаються виключно з літер кириліці, що мають точні графічні відповідники в латиниці: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "А, В, Е, І, К, М, Н, О, Р, С, Т, Х"
							}),
							". Саме тому номер однаково читається і кирилицею, і латиною — це зроблено навмисно, щоб спростити міжнародне визнання документів та роботу автоматичних систем розпізнавання."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "З 2015 року в Україні діє оновлений стандарт: регіональні коди змінилися, а частина областей отримала нові двохлітерні префікси. На кожній сторінці регіону ви знайдете як старий код зразка 2004 року, так і новий — щоб можна було швидко зіставити будь-який знак із місцем його видачі." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Якщо вас цікавить конкретний автомобіль — просто введіть номер у пошуковий рядок. Якщо хочете переглянути всі серії певного регіону — обирайте область зі списку нижче і переходьте до повного каталогу номерів цього регіону." })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Этот ресурс — полный структурированный каталог всех номерных знаков Украины стандарта 2004 и 2015 годов. Каждая возможная комбинация в формате ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "XX0000YY"
							}),
							" представлена отдельной страницей: 27 региональных кодов, числовая часть от 0001 до 9999 и 144 серии — в совокупности более 38 миллионов уникальных номеров."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Для каждого номерного знака мы в режиме реального времени запрашиваем открытую базу МВД Украины и отображаем все имеющиеся регистрационные операции: первичную регистрацию, смену собственника, перерегистрацию после ДТП, снятие с учёта и другие. Там, где данные есть, вы увидите марку и модель автомобиля, год выпуска, тип кузова, объём двигателя, цвет и регион регистрации." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Буквенные части украинских номеров состоят исключительно из букв кириллицы, имеющих точные графические аналоги в латинице: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "А, В, Е, І, К, М, Н, О, Р, С, Т, Х"
							}),
							". Именно поэтому номер одинаково читается и кириллицей, и латиницей — это сделано намеренно, чтобы упростить международное признание документов и работу автоматических систем распознавания."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "С 2015 года в Украине действует обновлённый стандарт: региональные коды изменились, а часть областей получила новые двухбуквенные префиксы. На каждой странице региона вы найдёте как старый код образца 2004 года, так и новый — чтобы можно было быстро соотнести любой знак с местом его выдачи." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Если вас интересует конкретный автомобиль — просто введите номер в строку поиска. Если хотите просмотреть все серии определённого региона — выберите область из списка ниже и перейдите к полному каталогу номеров этого региона." })
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "partners",
				className: "panel mt-8 scroll-mt-24 px-5 py-6 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: lang === "uk" ? "Партнери сайту" : "Партнёры сайта"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://apartner.pro",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "panel flex h-full flex-col gap-1 px-4 py-4 transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "apartner.pro"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: lang === "uk" ? "Веб-студія розробки сайтів" : "Веб-студия разработки сайтов"
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://keytest.pp.ua",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "panel flex h-full flex-col gap-1 px-4 py-4 transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "keytest.pp.ua"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: lang === "uk" ? "Тестування клавіатури онлайн" : "Тестирование клавиатуры онлайн"
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://monitortest.pp.ua",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "panel flex h-full flex-col gap-1 px-4 py-4 transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "monitortest.pp.ua"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: lang === "uk" ? "Тестування екрану монітора онлайн" : "Тестирование экрана монитора онлайн"
							})]
						}) })
					]
				})]
			})
		]
	});
}
//#endregion
export { HomePage as t };
