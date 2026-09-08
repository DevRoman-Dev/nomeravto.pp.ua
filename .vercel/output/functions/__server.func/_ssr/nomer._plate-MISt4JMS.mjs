import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
import { t as PlatePage } from "./PlatePage-CL4Y1KEO.mjs";
import { l as Route$11 } from "./router-0mmkwscL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nomer._plate-MISt4JMS.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { plate } = Route$11.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatePage, {
		lang: "uk",
		plate: toLatinPlate(plate)
	});
}
//#endregion
export { RouteComponent as component };
