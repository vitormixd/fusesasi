var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var v3Data = "v3Data.json";

var	vyear3 = Observable("Add");
var	vmake3 = Observable("New");
var	vmodel3 = Observable("Vehicle");
var	fueltype3 = Observable("Unleaded/Plus/Premium/Diesel");
var	oiltype3 = Observable("5W-20/0W-20/I Don't Know");

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
    var tempStoreObject = {
    	
    	vyear3: vyear3.value,
    	vmake3: vmake3.value,
    	vmodel3: vmodel3.value,
    	fueltype3: fueltype3.value,
    	oiltype3: oiltype3.value,
    	 };

    Storage.write(v3Data, JSON.stringify(tempStoreObject));
    debug_log("Vehicle3 Storage initialized");
});


function cancel3() {
	// Refresh vehicle value to reset dependent Observables' values
	vyear3.value = vyear3.value;
	vmake3.value = vmake3.value;
	vmodel3.value = vmodel3.value;
	fueltype3.value = fueltype3.value;
	oiltype3.value = oiltype3.value;
	router.goBack();
}

function save3() {

	var StoreObjectVehicle3 = {
		vyear3: vyear3.value,
		vmake3: vmake3.value,
		vmodel3: vmodel3.value,
		fueltype3: fueltype3.value,
		oiltype3: oiltype3.value
	};

    Storage.write(v3Data, JSON.stringify(StoreObjectVehicle3));

	router.goBack();
}

function goToSelections3() {

	var StoreObjectVehicle3 = {
		vyear3: vyear3.value,
		vmake3: vmake3.value,
		vmodel3: vmodel3.value,
		fueltype3: fueltype3.value,
		oiltype3: oiltype3.value
	};

    Storage.write(v3Data, JSON.stringify(StoreObjectVehicle3));
	router.push("selectService3");
}

module.exports = {
	vyear3: vyear3,
	vmake3: vmake3,
	vmodel3: vmodel3,
	fueltype3: fueltype3,
	oiltype3: oiltype3,

	cancel3: cancel3,
	save3: save3,
	goToSelections3: goToSelections3
};