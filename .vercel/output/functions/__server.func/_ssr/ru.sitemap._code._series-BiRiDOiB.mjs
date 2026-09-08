import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Route } from "./router-C2d6GZ-n.mjs";
import { t as SitemapNumbersPage } from "./SitemapNumbersPage-CaK7JnI4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.sitemap._code._series-BiRiDOiB.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const params = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitemapNumbersPage, {
		lang: "ru",
		code: params.code,
		series: params.series
	});
};
//#endregion
export { SplitComponent as component };
