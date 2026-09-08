import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TSS_SERVER_FUNCTION, i as createServerFn, o as getServerFnById } from "./server-piEJ3y4E.mjs";
import { c as toCyrillicPlate, o as parsePlate, r as findRegion, s as regionName } from "./plates-DEmAvcbq.mjs";
import { n as fieldLabel, r as t, t as SiteLayout } from "./SiteLayout-BFTVPuGg.mjs";
import { n as PlateSearch, t as PlateBadge } from "./PlateSearch-CQRscfSa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PlatePage-CL4Y1KEO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var lookupPlate = createServerFn({ method: "GET" }).inputValidator((data) => {
	const plate = String(data?.plate ?? "").toUpperCase().replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "").slice(0, 10);
	if (!plate) throw new Error("plate_required");
	return { plate };
}).handler(createSsrRpc("be0e8dff2537fdafc6d7c5a8f32e5549aa63360e15e9599fde34320d0f8589e1"));
function PlatePage({ lang, plate }) {
	const base = lang === "uk" ? "" : "/ru";
	const parsed = parsePlate(plate);
	const region = findRegion(parsed?.regionCode ?? "");
	const fetchPlate = useServerFn(lookupPlate);
	const { data, isLoading } = useQuery({
		queryKey: ["plate", plate],
		queryFn: () => fetchPlate({ data: { plate } }),
		staleTime: 3e5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		lang,
		altHref: lang === "uk" ? `/ru/nomer/${plate}` : `/nomer/${plate}`,
		breadcrumbs: [
			{
				label: t("siteName", lang),
				href: `${base || "/"}`
			},
			...region ? [{
				label: regionName(region, lang),
				href: `${base}/region/${region.code}`
			}] : [],
			{ label: toCyrillicPlate(plate) }
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel px-5 py-6 sm:px-8 sm:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateBadge, {
						plate,
						size: "lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-2xl sm:text-3xl",
						children: lang === "uk" ? `Номерний знак ${toCyrillicPlate(plate)} — дані МВС України` : `Номерной знак ${toCyrillicPlate(plate)} — данные МВД Украины`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 text-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted-foreground uppercase",
								children: t("region", lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: regionName(region, lang)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted-foreground uppercase",
								children: t("number", lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: parsed?.number ?? "—"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted-foreground uppercase",
								children: t("series", lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: toCyrillicPlate(parsed?.series ?? "")
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: t("operations", lang)
					}),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel mt-4 animate-pulse px-5 py-8 text-sm text-muted-foreground",
						children: t("loading", lang)
					}),
					!isLoading && data?.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "panel mt-4 px-5 py-6 text-sm text-muted-foreground",
						children: t("sourceError", lang)
					}),
					!isLoading && data && !data.error && !data.found && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "panel mt-4 px-5 py-6 text-sm text-muted-foreground",
						children: t("notFound", lang)
					}),
					!isLoading && data?.found && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							t("operationsCount", lang),
							": ",
							data.operations.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4",
						children: data.operations.map((op, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "panel divide-y divide-border px-5 py-2 text-sm",
							children: op.fields.map((f, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted-foreground uppercase",
									children: fieldLabel(f.key, lang)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: f.key === "plate" ? "font-plate text-lg" : "font-medium",
									children: f.value
								})]
							}, j))
						}, i))
					})] })
				]
			}),
			!!data?.variants.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: t("variantsTitle", lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7",
					children: data.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `${base}/nomer/${v}`,
						className: "chip chip-hover block px-1 py-2 text-center text-xs",
						children: toCyrillicPlate(v)
					}) }, v))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel mt-8 px-5 py-6 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: t("searchTitle", lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 max-w-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateSearch, { lang })
				})]
			})
		]
	});
}
//#endregion
export { PlatePage as t };
