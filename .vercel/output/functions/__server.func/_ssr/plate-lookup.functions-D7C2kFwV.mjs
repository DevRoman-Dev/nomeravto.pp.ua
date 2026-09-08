import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-DbvxSbuU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plate-lookup.functions-D7C2kFwV.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var lookupPlate_createServerFn_handler = createServerRpc({
	id: "be0e8dff2537fdafc6d7c5a8f32e5549aa63360e15e9599fde34320d0f8589e1",
	name: "lookupPlate",
	filename: "src/lib/plate-lookup.functions.ts"
}, (opts) => lookupPlate.__executeServer(opts));
var lookupPlate = createServerFn({ method: "GET" }).inputValidator((data) => {
	const plate = String(data?.plate ?? "").toUpperCase().replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "").slice(0, 10);
	if (!plate) throw new Error("plate_required");
	return { plate };
}).handler(lookupPlate_createServerFn_handler, async ({ data }) => {
	const { lookupPlateOnSource } = await import("./plate-lookup.server-2hh1gGnF.mjs");
	return lookupPlateOnSource(data.plate);
});
//#endregion
export { lookupPlate_createServerFn_handler };
