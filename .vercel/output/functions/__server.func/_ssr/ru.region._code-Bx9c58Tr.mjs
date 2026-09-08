import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Route$1 } from "./router-N3Zmtyfg.mjs";
import { t as RegionPage } from "./RegionPage-DSWY_19-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.region._code-Bx9c58Tr.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { code } = Route$1.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionPage, {
		lang: "ru",
		code: code.toUpperCase()
	});
}
//#endregion
export { RouteComponent as component };
