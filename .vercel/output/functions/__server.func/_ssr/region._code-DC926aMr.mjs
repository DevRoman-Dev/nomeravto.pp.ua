import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Route$10 } from "./router-0mmkwscL.mjs";
import { t as RegionPage } from "./RegionPage-BnfrCtDL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/region._code-DC926aMr.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { code } = Route$10.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionPage, {
		lang: "uk",
		code: code.toUpperCase()
	});
}
//#endregion
export { RouteComponent as component };
