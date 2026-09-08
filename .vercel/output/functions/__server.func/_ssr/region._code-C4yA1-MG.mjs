import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Route$4 } from "./router-a6vdKL2L.mjs";
import { t as RegionPage } from "./RegionPage-DSWY_19-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/region._code-C4yA1-MG.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { code } = Route$4.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionPage, {
		lang: "uk",
		code: code.toUpperCase()
	});
}
//#endregion
export { RouteComponent as component };
