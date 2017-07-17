var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var v1Data = "v1Data.json";

var	vyear1 = Observable("2011");
var	vmake1 = Observable("Ford");
var	vmodel1 = Observable("F150");
var	fueltype1 = Observable("Unleaded/Plus/Premium/Diesel");
var	oiltype1 = Observable("5W-20/0W-20/I Don't Know");

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
    var tempStoreObject = {
    	
    	vyear1: vyear1.value,
    	vmake1: vmake1.value,
    	vmodel1: vmodel1.value,
    	fueltype1: fueltype1.value,
    	oiltype1: oiltype1.value,
    	 };

    Storage.write(v1Data, JSON.stringify(tempStoreObject));
    debug_log("Vehicle1 Storage initialized");
});


function cancel1() {
	// Refresh vehicle value to reset dependent Observables' values
	vyear1.value = vyear1.value;
	vmake1.value = vmake1.value;
	vmodel1.value = vmodel1.value;
	fueltype1.value = fueltype1.value;
	oiltype1.value = oiltype1.value;
	router.goBack();
}

function save1() {

	var StoreObjectVehicle1 = {
		vyear1: vyear1.value,
		vmake1: vmake1.value,
		vmodel1: vmodel1.value,
		fueltype1: fueltype1.value,
		oiltype1: oiltype1.value
	};

    Storage.write(v1Data, JSON.stringify(StoreObjectVehicle1));

	router.goBack();
}

function goToSelections1() {
	router.push("selectService1");
}

module.exports = {
	vyear1: vyear1,
	vmake1: vmake1,
	vmodel1: vmodel1,
	fueltype1: fueltype1,
	oiltype1: oiltype1,

	cancel1: cancel1,
	save1: save1,
	goToSelections1: goToSelections1
};