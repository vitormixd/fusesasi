var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var v4Data = "v4Data.json";

var	vyear4 = Observable("Add");
var	vmake4 = Observable("New");
var	vmodel4 = Observable("Vehicle");
var	fueltype4 = Observable("Unleaded/Plus/Premium/Diesel");
var	oiltype4 = Observable("5W-20/0W-20/I Don't Know");

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
    var tempStoreObject = {
    	
    	vyear4: vyear4.value,
    	vmake4: vmake4.value,
    	vmodel4: vmodel4.value,
    	fueltype4: fueltype4.value,
    	oiltype4: oiltype4.value,
    	 };

    Storage.write(v4Data, JSON.stringify(tempStoreObject));
    debug_log("Vehicle4 Storage initialized");
});


function cancel4() {
	// Refresh vehicle value to reset dependent Observables' values
	vyear4.value = vyear4.value;
	vmake4.value = vmake4.value;
	vmodel4.value = vmodel4.value;
	fueltype4.value = fueltype4.value;
	oiltype4.value = oiltype4.value;
	router.goBack();
}

function save4() {

	var StoreObjectVehicle4 = {
		vyear4: vyear4.value,
		vmake4: vmake4.value,
		vmodel4: vmodel4.value,
		fueltype4: fueltype4.value,
		oiltype4: oiltype4.value
	};

    Storage.write(v4Data, JSON.stringify(StoreObjectVehicle4));

	router.goBack();
}

function goToSelections4() {
	var StoreObjectVehicle4 = {
		vyear4: vyear4.value,
		vmake4: vmake4.value,
		vmodel4: vmodel4.value,
		fueltype4: fueltype4.value,
		oiltype4: oiltype4.value
	};

    Storage.write(v4Data, JSON.stringify(StoreObjectVehicle4));
	router.push("selectService4");
}

module.exports = {
	vyear4: vyear4,
	vmake4: vmake4,
	vmodel4: vmodel4,
	fueltype4: fueltype4,
	oiltype4: oiltype4,

	cancel4: cancel4,
	save4: save4,
	goToSelections4: goToSelections4
};