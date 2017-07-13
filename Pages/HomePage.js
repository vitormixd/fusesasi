var Context = require("Modules/Context");

function goToVehicle(arg) {
	var vehicle = arg.data;
	router.push("editVehicle", vehicle);
}

function goToPinfo() {
	router.goto("editPinfo");
}

module.exports = {
	vehicles: Context.vehicles,
	pinfos: Context.pinfos,

	goToVehicle: goToVehicle,
	goToPinfo: goToPinfo
};