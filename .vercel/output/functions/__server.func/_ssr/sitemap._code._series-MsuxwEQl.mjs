import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Route$3 } from "./router-jLiXmT80.mjs";
import { t as SitemapNumbersPage } from "./SitemapNumbersPage-BWOzJzTk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap._code._series-MsuxwEQl.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const params = Route$3.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitemapNumbersPage, {
		lang: "uk",
		code: params.code,
		series: params.series
	});
};
//#endregion
export { SplitComponent as component };
