var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var v2Data = "v2Data.json";

var	vyear2 = Observable("Add");
var	vmake2 = Observable("New");
var	vmodel2 = Observable("Vehicle");
var	fueltype2 = Observable("Unleaded/Plus/Premium/Diesel");
var	oiltype2 = Observable("5W-20/0W-20/I Don't Know");

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
    var tempStoreObject = {
    	
    	vyear2: vyear2.value,
    	vmake2: vmake2.value,
    	vmodel2: vmodel2.value,
    	fueltype2: fueltype2.value,
    	oiltype2: oiltype2.value,
    	 };

    Storage.write(v2Data, JSON.stringify(tempStoreObject));
    debug_log("Vehicle2 Storage initialized");
});


function cancel2() {
	// Refresh vehicle value to reset dependent Observables' values
	vyear2.value = vyear2.value;
	vmake2.value = vmake2.value;
	vmodel2.value = vmodel2.value;
	fueltype2.value = fueltype2.value;
	oiltype2.value = oiltype2.value;
	router.goBack();
}

function save2() {

	var StoreObjectVehicle2 = {
		vyear2: vyear2.value,
		vmake2: vmake2.value,
		vmodel2: vmodel2.value,
		fueltype2: fueltype2.value,
		oiltype2: oiltype2.value
	};

    Storage.write(v2Data, JSON.stringify(StoreObjectVehicle2));

	router.goBack();
}

function goToSelections2() {
	router.push("selectService2");
}

module.exports = {
	vyear2: vyear2,
	vmake2: vmake2,
	vmodel2: vmodel2,
	fueltype2: fueltype2,
	oiltype2: oiltype2,

	cancel2: cancel2,
	save2: save2,
	goToSelections2: goToSelections2
};