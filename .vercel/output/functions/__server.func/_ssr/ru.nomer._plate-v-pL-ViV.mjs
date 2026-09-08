import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as toLatinPlate } from "./plates-DEmAvcbq.mjs";
import { t as PlatePage } from "./PlatePage-DKh3tMiT.mjs";
import { r as Route$2 } from "./router-a6vdKL2L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.nomer._plate-v-pL-ViV.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { plate } = Route$2.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatePage, {
		lang: "ru",
		plate: toLatinPlate(plate)
	});
}
//#endregion
export { RouteComponent as component };
