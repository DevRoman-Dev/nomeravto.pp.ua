import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as formatPlate } from "./plates-DEmAvcbq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PlateBadge-4rvfV-oc.js
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
//#endregion
export { PlateBadge as t };
