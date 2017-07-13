var Context = require("Modules/Context");

var vehicle = this.Parameter;

var vyear = vehicle.map(function(x) { return x.vyear; });
var vmake = vehicle.map(function(x) { return x.vmake; });
var vmodel = vehicle.map(function(x) { return x.vmodel; });
var fueltype = vehicle.map(function(x) { return x.fueltype; });
var oiltype = vehicle.map(function(x) { return x.oiltype; });

function cancel() {
	// Refresh vehicle value to reset dependent Observables' values
	vehicle.value = vehicle.value;
	router.goBack();
}

function save() {
	Context.updateVehicle(vehicle.value.id, vyear.value, vmake.value, vmodel.value, fueltype.value, oiltype.value);
	router.goBack();
}

module.exports = {
	vyear: vyear,
	vmake: vmake,
	vmodel: vmodel,
	fueltype: fueltype,
	oiltype: oiltype,

	cancel: cancel,
	save: save
};