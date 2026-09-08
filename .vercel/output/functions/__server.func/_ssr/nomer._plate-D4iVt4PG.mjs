import { l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Route$15 } from "./router-C2d6GZ-n.mjs";
import { t as PlatePage } from "./PlatePage-C0SwOKDH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nomer._plate-D4iVt4PG.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { plate } = Route$15.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatePage, {
		lang: "uk",
		plate: toLatinPlate(plate)
	});
}
//#endregion
export { RouteComponent as component };
