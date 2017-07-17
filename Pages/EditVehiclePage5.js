var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var v5Data = "v5Data.json";

var	vyear5 = Observable("Add");
var	vmake5 = Observable("New");
var	vmodel5 = Observable("Vehicle");
var	fueltype5 = Observable("Unleaded/Plus/Premium/Diesel");
var	oiltype5 = Observable("5W-20/0W-20/I Don't Know");

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
    var tempStoreObject = {
    	
    	vyear5: vyear5.value,
    	vmake5: vmake5.value,
    	vmodel5: vmodel5.value,
    	fueltype5: fueltype5.value,
    	oiltype5: oiltype5.value,
    	 };

    Storage.write(v5Data, JSON.stringify(tempStoreObject));
    debug_log("Vehicle5 Storage initialized");
});


function cancel5() {
	// Refresh vehicle value to reset dependent Observables' values
	vyear5.value = vyear5.value;
	vmake5.value = vmake5.value;
	vmodel5.value = vmodel5.value;
	fueltype5.value = fueltype5.value;
	oiltype5.value = oiltype5.value;
	router.goBack();
}

function save5() {

	var StoreObjectVehicle5 = {
		vyear5: vyear5.value,
		vmake5: vmake5.value,
		vmodel5: vmodel5.value,
		fueltype5: fueltype5.value,
		oiltype5: oiltype5.value
	};

    Storage.write(v5Data, JSON.stringify(StoreObjectVehicle5));

	router.goBack();
}

function goToSelections5() {
	router.push("selectService5");
}

module.exports = {
	vyear5: vyear5,
	vmake5: vmake5,
	vmodel5: vmodel5,
	fueltype5: fueltype5,
	oiltype5: oiltype5,

	cancel5: cancel5,
	save5: save5,
	goToSelections5: goToSelections5
};