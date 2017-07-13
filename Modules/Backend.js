var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var SAVEDATA = "localStorage.json";
var hasStored = Observable(false);

var pinfos = [
	{
		pid: 0,
		flname: "John Doe",
		phonenumber: "480-834-4554",
		email: "first.last@gmail.com",
		pickup: "3539 E. Presidio Cir Mesa, AZ 85213",
		gatecode: "#1234"
	},
];

var vehicles = [
	{
		id: 0,
		vyear: "2010",
		vmake: "Ford",
		vmodel: "F150",
		fueltype: "Unleaded/Plus/Premium/Diesel",
		oiltype: "5W-20/0W-20/I Don't Know"
	},
	{
		id: 1,
		vyear: "Add",
		vmake: "New",
		vmodel: "Vehicle",
		fueltype: "--",
		oiltype: "--"
	},
	{
		id: 2,
		vyear: "Add",
		vmake: "New",
		vmodel: "Vehicle",
		fueltype: "--",
		oiltype: "--"
	},
	{
		id: 3,
		vyear: "Add",
		vmake: "New",
		vmodel: "Vehicle",
		fueltype: "--",
		oiltype: "--"
	},
	{
		id: 4,
		vyear: "Add",
		vmake: "New",
		vmodel: "Vehicle",
		fueltype: "--",
		oiltype: "--"
	}
];

debug_log("Js initialized");

Storage.read(SAVEDATA).then(function(content) {
    var data = JSON.parse(content);
    pinfos.value = data.pinfos;
    vehicles.value = data.vehicles;
}, function(error) {
    //For now, let's expect the error to be because of the file not being found.
    var tempStoreObject = {pinfos: pinfos.value, vehicles: vehicles.value};
    Storage.write(SAVEDATA, JSON.stringify(tempStoreObject));
    hasStored.value = true;
});

function getVehicles() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(vehicles);
		}, 0);
	});
}

function updateVehicle(id, vyear, vmake, vmodel, fueltype, oiltype) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			for (var i = 0; i < vehicles.length; i++) {
				var vehicle = vehicles[i];
				if (vehicle.id == id) {
					vehicle.vyear = vyear;
					vehicle.vmake = vmake;
					vehicle.vmodel = vmodel;
					vehicle.fueltype = fueltype;
					vehicle.oiltype = oiltype;
					break;
				}
			}

			resolve();
		}, 0);
	});
	var StoreObjectVehicles = {vehicles: vehicles.value};
    Storage.write(SAVEDATA, JSON.stringify(StoreObjectVehicles));
}

function getPinfos() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(pinfos);
		}, 0);
	});
}

function updatePinfo(pid, flname, phonenumber, email, pickup, gatecode) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			for (var i = 0; i < pinfos.length; i++) {
				var pinfo = pinfos[i];
				if (pinfo.pid == pid) {
					pinfo.flname = flname;
					pinfo.phonenumber = phonenumber;
					pinfo.email = email;
					pinfo.pickup = pickup;
					pinfo.gatecode = gatecode;
					break;
				}
			}

			resolve();
		}, 0);
	});
	var StoreObjectPinfo = {pinfos: pinfos.value};
    Storage.write(SAVEDATA, JSON.stringify(StoreObjectPinfo));
}

module.exports = {
	pinfos: pinfos,
	vehicles: vehicles,
	hasStored: hasStored,

	getVehicles: getVehicles,
	updateVehicle: updateVehicle,
	
	getPinfos: getPinfos,
	updatePinfo: updatePinfo
};