import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
import { t as PlatePage } from "./PlatePage-B0z-Wnd4.mjs";
import { a as Route$5 } from "./router-N3Zmtyfg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nomer._plate-CsrAaMJF.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { plate } = Route$5.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatePage, {
		lang: "uk",
		plate: toLatinPlate(plate)
	});
}
//#endregion
export { RouteComponent as component };
