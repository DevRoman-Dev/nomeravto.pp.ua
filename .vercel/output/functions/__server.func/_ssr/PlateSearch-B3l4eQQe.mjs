import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as isValidPlate, i as formatPlate, l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
import { r as t } from "./SiteLayout-WF_tPz7h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PlateSearch-B3l4eQQe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlateBadge({ plate, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `plate-face inline-flex items-center gap-2 ${{
			sm: "text-base px-2 py-1",
			md: "text-2xl px-3 py-1.5",
			lg: "text-3xl sm:text-5xl px-4 py-2.5"
		}[size]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"aria-hidden": true,
			className: "inline-flex h-full flex-col overflow-hidden rounded-[3px] border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-3 bg-flag-blue sm:w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-3 bg-flag-gold sm:w-4" })]
		}), formatPlate(plate)]
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
//#endregion
export { PlateSearch as n, PlateBadge as t };
