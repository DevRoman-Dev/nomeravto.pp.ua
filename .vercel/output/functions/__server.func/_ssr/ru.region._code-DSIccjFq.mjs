import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as Route$6 } from "./router-C2d6GZ-n.mjs";
import { t as RegionPage } from "./RegionPage-BKI5MSzb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.region._code-DSIccjFq.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { code } = Route$6.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionPage, {
		lang: "ru",
		code: code.toUpperCase()
	});
}
//#endregion
export { RouteComponent as component };
