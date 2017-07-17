var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");
//var email = require('FuseJS/Email');


var pData = "pData.json";
var flname = Observable("---");
var phonenumber = Observable("---");
var	email = Observable("---");
var	pickup = Observable("---");
var	gatecode = Observable("---");

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
    flname.value = "No";
    phonenumber.value = "Storage";
    email.value = "Found";
});

var v1Data = "v1Data.json";
var	vyear1 = Observable("---");
var	vmake1 = Observable("---");
var	vmodel1 = Observable("---");
var	fueltype1 = Observable("---");
var	oiltype1 = Observable("---");

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

var tripCharge = 50;
var fillGasTank = 0;
var carWashVaccum = 0;
var rotateTires = 0;
var changeOil = 0;
var detailInterior = 0;
var totalCost =tripCharge+fillGasTank+carWashVaccum+rotateTires+changeOil+detailInterior;

var date = Observable("Edit Next");
var sasiEmail = Observable("Edit Next");
var subject = Observable("Edit Next");
var bodyMessage = Observable("Edit Next");

var gasCount = 0;
var gasEmail = Observable("---");
function gasClick() {
	gasCount += 1;
	debug_log(gasCount);
    if (gasCount = 1 || 3 || 5 || 7 || 9 || 11 || 13 || 15) {
	   gasEmail = Observable("Fill Gas Tank");
	   fillGasTank = 15;
       debug_log(fillGasTank);
}       else {
		  gasEmail = Observable("---");
		  fillGasTank = 0;
}};
 

function cancelService1() {
	router.goBack();
}

function confirmService1() {
	//email.compose(sasiEmail,"","",subject,bodyMessage)
	router.goto("home");
}

module.exports = {
	totalCost: totalCost,
	gasClick: gasClick,

	cancelService1: cancelService1,
	confirmService1: confirmService1
};