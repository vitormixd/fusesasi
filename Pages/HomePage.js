var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");



//Vehicle 1
var v1Data = "v1Data.json";
var	vyear1 = Observable("Add");
var	vmake1 = Observable("New");
var	vmodel1 = Observable("Vehicle");

Storage.read(v1Data).then(
	function(content) {
    debug_log("Content Found in v1Data");
    var data = JSON.parse(content);

	vyear1.value = data.vyear1;
    vmake1.value = data.vmake1;
    vmodel1.value = data.vmodel1;
    fueltype1.value = data.fueltype1;
    oiltype1.value = data.oiltype1;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear1.value = "No";
    vmake1.value = "Storage";
    vmodel1.value = "Found";
});

//Vehicle 2
var v2Data = "v2Data.json";
var	vyear2 = Observable("Add");
var	vmake2 = Observable("New");
var	vmodel2 = Observable("Vehicle");

Storage.read(v2Data).then(
	function(content) {
    debug_log("Content Found in v2Data");
    var data = JSON.parse(content);

	vyear2.value = data.vyear2;
    vmake2.value = data.vmake2;
    vmodel2.value = data.vmodel2;
    fueltype2.value = data.fueltype2;
    oiltype2.value = data.oiltype2;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear2.value = "No";
    vmake2.value = "Storage";
    vmodel2.value = "Found";
});

//Vehicle 3
var v3Data = "v3Data.json";
var	vyear3 = Observable("Add");
var	vmake3 = Observable("New");
var	vmodel3 = Observable("Vehicle");

Storage.read(v3Data).then(
	function(content) {
    debug_log("Content Found in v3Data");
    var data = JSON.parse(content);

	vyear3.value = data.vyear3;
    vmake3.value = data.vmake3;
    vmodel3.value = data.vmodel3;
    fueltype3.value = data.fueltype3;
    oiltype3.value = data.oiltype3;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear3.value = "No";
    vmake3.value = "Storage";
    vmodel3.value = "Found";
});

//Vehicle 4
var v4Data = "v4Data.json";
var	vyear4 = Observable("Add");
var	vmake4 = Observable("New");
var	vmodel4 = Observable("Vehicle");

Storage.read(v4Data).then(
	function(content) {
    debug_log("Content Found in v4Data");
    var data = JSON.parse(content);

	vyear4.value = data.vyear4;
    vmake4.value = data.vmake4;
    vmodel4.value = data.vmodel4;
    fueltype4.value = data.fueltype4;
    oiltype4.value = data.oiltype4;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear4.value = "No";
    vmake4.value = "Storage";
    vmodel4.value = "Found";
});

//Vehicle 5
var v5Data = "v5Data.json";
var	vyear5 = Observable("Add");
var	vmake5 = Observable("New");
var	vmodel5 = Observable("Vehicle");

Storage.read(v5Data).then(
	function(content) {
    debug_log("Content Found in v5Data");
    var data = JSON.parse(content);

	vyear5.value = data.vyear5;
    vmake5.value = data.vmake5;
    vmodel5.value = data.vmodel5;
    fueltype5.value = data.fueltype5;
    oiltype5.value = data.oiltype5;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear5.value = "No";
    vmake5.value = "Storage";
    vmodel5.value = "Found";
});

function goToVehicle1() {
	router.push("editVehicle1");
}

function goToVehicle2() {
	router.push("editVehicle2");
}

function goToVehicle3() {
	router.push("editVehicle3");
}

function goToVehicle4() {
	router.push("editVehicle4");
}

function goToVehicle5() {
	router.push("editVehicle5");
}

function goToPinfo() {
	router.push("editPinfo");
}

module.exports = {

	vyear1: vyear1,
	vmake1: vmake1,
	vmodel1: vmodel1,

	vyear2: vyear2,
	vmake2: vmake2,
	vmodel2: vmodel2,

	vyear3: vyear3,
	vmake3: vmake3,
	vmodel3: vmodel3,

	vyear4: vyear4,
	vmake4: vmake4,
	vmodel4: vmodel4,

	vyear5: vyear5,
	vmake5: vmake5,
	vmodel5: vmodel5,


	goToVehicle1: goToVehicle1,
	goToVehicle2: goToVehicle2,
	goToVehicle3: goToVehicle3,
	goToVehicle4: goToVehicle4,
	goToVehicle5: goToVehicle5,
	goToPinfo: goToPinfo
};