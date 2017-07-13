var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var vehicles = Observable();
var pinfos = Observable();

Backend.getVehicles()
	.then(function(newVehicles) {
		vehicles.replaceAll(newVehicles);
	})
	.catch(function(error) {
		console.log("Couldn't get vehicles: " + error);
	});

function updateVehicle(id, vyear, vmake, vmodel, fueltype, oiltype) {
	for (var i = 0; i < vehicles.length; i++) {
		var vehicle = vehicles.getAt(i);
		if (vehicle.id == id) {
			vehicle.vyear = vyear;
			vehicle.vmake = vmake;
			vehicle.vmodel = vmodel;
			vehicle.fueltype =fueltype;
			vehicle.oiltype = oiltype;
			vehicles.replaceAt(i, vehicle);
			break;
		}
	}
	Backend.updateVehicle(id, vyear, vmake, vmodel, fueltype, oiltype)
		.catch(function(error) {
			console.log("Couldn't update vehicle: " + id);
		});
}



Backend.getPinfos()
	.then(function(newPinfos) {
		pinfos.replaceAll(newPinfos);
	})
	.catch(function(error) {
		console.log("Couldn't get pinfos: " + error);
	});

function updatePinfo(pid, flname, phonenumber, email, pickup, gatecode) {
	for (var i = 0; i < pinfos.length; i++) {
		var pinfo = pinfos.getAt(i);
		if (pinfo.pid == pid) {
			pinfo.flname = flname;
			pinfo.phonenumber = phonenumber;
			pinfo.email = email;
			pinfo.pickup = pickup;
			pinfo.gatecode = gatecode;
			pinfos.replaceAt(i, pinfo);
			break;
		}
	}
	Backend.updatePinfo(pid, flname, phonenumber, email, pickup, gatecode)
		.catch(function(error) {
			console.log("Couldn't update pinfo: " + pid);
		});
}


module.exports = {
	vehicles: vehicles,
	pinfos: pinfos,

	updateVehicle: updateVehicle,
	updatePinfo: updatePinfo
};