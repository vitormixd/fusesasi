var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");
var Timer = require("FuseJS/Timer")



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
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear1.value = "Add";
    vmake1.value = "New";
    vmodel1.value = "Vehicle";
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
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear2.value = "Add";
    vmake2.value = "New";
    vmodel2.value = "Vehicle";
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
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear3.value = "Add";
    vmake3.value = "New";
    vmodel3.value = "Vehicle";
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
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear4.value = "Add";
    vmake4.value = "New";
    vmodel4.value = "Vehicle";
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
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    vyear5.value = "Add";
    vmake5.value = "New";
    vmodel5.value = "Vehicle";
});

// Update From Storage Files every .5 seconds
Timer.create(function() {

       // debug_log("Wait 500mili");

    Storage.read(v1Data).then(
	function(content) {
  
    var data1 = JSON.parse(content);

	vyear1.value = data1.vyear1;
    vmake1.value = data1.vmake1;
    vmodel1.value = data1.vmodel1;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    //debug_log("No Storage File Found");
    vyear1.value = "Add";
    vmake1.value = "New";
    vmodel1.value = "Vehicle";
	});

	Storage.read(v2Data).then(
	function(content) {
   
    var data2 = JSON.parse(content);

	vyear2.value = data2.vyear2;
    vmake2.value = data2.vmake2;
    vmodel2.value = data2.vmodel2;
   },
  	function(error) {
    //For now, let's expect the error to be because of the file not being found.
    //debug_log("No Storage File Found");
    vyear2.value = "Add";
    vmake2.value = "New";
    vmodel2.value = "Vehicle";
	});

	Storage.read(v3Data).then(
	function(content) {
    
    var data3 = JSON.parse(content);

	vyear3.value = data3.vyear3;
    vmake3.value = data3.vmake3;
    vmodel3.value = data3.vmodel3;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    //debug_log("No Storage File Found");
    vyear3.value = "Add";
    vmake3.value = "New";
    vmodel3.value = "Vehicle";
	});

	Storage.read(v4Data).then(
	function(content) {
   
    var data4 = JSON.parse(content);

	vyear4.value = data4.vyear4;
    vmake4.value = data4.vmake4;
    vmodel4.value = data4.vmodel4;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    //debug_log("No Storage File Found");
    vyear4.value = "Add";
    vmake4.value = "New";
    vmodel4.value = "Vehicle";
	});

	Storage.read(v5Data).then(
	function(content) {
    
    var data5 = JSON.parse(content);

	vyear5.value = data5.vyear5;
    vmake5.value = data5.vmake5;
    vmodel5.value = data5.vmodel5;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
   // debug_log("No Storage File Found");
    vyear5.value = "Add";
    vmake5.value = "New";
    vmodel5.value = "Vehicle";
	});


    }, 500, true);

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

function goToServiceInfo() {
  router.push("serviceInfo");
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
	goToPinfo: goToPinfo,
  goToServiceInfo: goToServiceInfo
};