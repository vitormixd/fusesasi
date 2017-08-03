var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var pData = "pData.json";
var	flname = Observable("");
var	phonenumber = Observable("");
var	email = Observable("");
var	pickup = Observable("");
var	gatecode = Observable("");

Storage.read(pData).then(
	function(content) {
    debug_log("Content Found in pData");
    var data = JSON.parse(content);

	flname.value = data.flname;
    phonenumber.value = data.phonenumber;
    email.value = data.email;
    pickup.value = data.pickup;
    gatecode.value = data.gatecode;
   },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    var tempStoreObject = {
    	
    	flname: flname.value,
    	phonenumber: phonenumber.value,
    	email: email.value,
    	pickup: pickup.value,
    	gatecode: gatecode.value,
    	 };

    Storage.write(pData, JSON.stringify(tempStoreObject));
    debug_log("Pinfo Storage initialized");
});

function cancelpinfo() {
	// Refresh personal information value to reset dependent Observables' values
	router.goto("home");
}

function savepinfo() {

	var StoreObjectPinfo = {
		flname: flname.value,
		phonenumber: phonenumber.value,
		email: email.value,
		pickup: pickup.value,
		gatecode: gatecode.value
	};

    Storage.write(pData, JSON.stringify(StoreObjectPinfo));

	router.goto("home");
}


module.exports = {
	flname: flname,
	phonenumber: phonenumber,
	email: email,
	pickup: pickup,
	gatecode: gatecode,

	cancelpinfo: cancelpinfo,
	savepinfo: savepinfo
};