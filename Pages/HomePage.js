var Context = require("Modules/Context");

function goToVehicle(arg) {
	var vehicle = arg.data;
	router.push("editVehicle", vehicle);
}

function goToPinfo(args) {
	router.push("editPinfo", args.data);
}

module.exports = {
	vehicles: Context.vehicles,
	pinfos: Context.pinfos.first(),

	goToVehicle: goToVehicle,
	goToPinfo: goToPinfo
};