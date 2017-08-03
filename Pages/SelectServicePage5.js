var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");
var Timer = require("FuseJS/Timer")
var email = require('FuseJS/Email');


var pData = "pData.json";
var flname = Observable("---");
var phonenumber = Observable("---");
var	email1 = Observable("---");
var	pickup = Observable("---");
var	gatecode = Observable("---");

var v5Data = "v5Data.json";
var	vyear5 = Observable("---");
var	vmake5 = Observable("---");
var	vmodel5 = Observable("---");
var	fueltype5 = Observable("---");
var	oiltype5 = Observable("---");


var dolla = Observable("$");
var tripCharge = Observable(60);
var fillGasTank = Observable(0);
var carWashVaccum = Observable(0);
var rotateTires = Observable(0);
var changeOil = Observable(0);
var detailInterior = Observable(0);
var totalCost =Observable(0);
totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;

var gasCount = 0;
var gasEmail = Observable("---");
function gasClick() {
        if (gasCount == 1) {
            gasCount -= 1;
            fillGasTank.value = 0;
            gasEmail = Observable("---");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
           debug_log(gasCount); 
           debug_log(gasEmail.value);
        } else {
            gasCount += 1;
            fillGasTank.value = 15;
            gasEmail = Observable("Fill Gas Tank");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
            debug_log(gasCount);
            debug_log(gasEmail.value);
        }
}

var washCount = 0;
var washEmail = Observable("---");
function washClick() {
        if (washCount == 1) {
            washCount -= 1;
            carWashVaccum.value = 0;
            washEmail = Observable("---");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
           debug_log(washCount); 
           debug_log(washEmail.value);
        } else {
            washCount += 1;
            carWashVaccum.value = 20;
            washEmail = Observable("Car Wash / Vaccum");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
            debug_log(washCount);
            debug_log(washEmail.value);
        }
}

var tireCount = 0;
var tireEmail = Observable("---");
function tireClick() {
        if (tireCount == 1) {
            tireCount -= 1;
            rotateTires.value = 0;
            tireEmail = Observable("---");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
           debug_log(tireCount); 
           debug_log(tireEmail.value);
        } else {
            tireCount += 1;
            rotateTires.value = 30;
            tireEmail = Observable("Rotate Tires");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
            debug_log(tireCount);
            debug_log(tireEmail.value);
        }
}

var oilCount = 0;
var oilEmail = Observable("---");
function oilClick() {
        if (oilCount == 1) {
            oilCount -= 1;
            changeOil.value = 0;
            oilEmail = Observable("---");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
           debug_log(oilCount); 
           debug_log(oilEmail.value);
        } else {
            oilCount += 1;
            changeOil.value = 60;
            oilEmail = Observable("Change Oil");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
            debug_log(oilCount);
            debug_log(oilEmail.value);
        }
}

var detailCount = 0;
var detailEmail = Observable("---");
function detailClick() {
        if (detailCount == 1) {
            detailCount -= 1;
            detailInterior.value = 0;
            detailEmail = Observable("---");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
           debug_log(detailCount); 
           debug_log(detailEmail.value);
        } else {
            detailCount += 1;
            detailInterior.value = 80;
            detailEmail = Observable("Detail Interior");
            totalCost.value = tripCharge.value+fillGasTank.value+carWashVaccum.value+rotateTires.value+changeOil.value+detailInterior.value;
            debug_log(detailCount);
            debug_log(detailEmail.value);
        }
}

function cancelService() {
	router.goBack();
}

var date = Observable();

function monClick() {
    date.value = "Monday";
}
function tuesClick() {
    date.value = "Tuesday";
}
function wedClick() {
    date.value = "Wednesday";
}
function thursClick() {
    date.value = "Thursday";
}

var sasiEmail = Observable("sasi.ordered.services@gmail.com");
var bodyMessage = [];

function confirmService() {

if (totalCost.value != 50 && (date.value == "Monday" || date.value == "Tuesday" || date.value == "Wednesday" || date.value == "Thursday")) {

    Storage.read(pData).then(
    function(content) {
    debug_log("Content Found in pData");
    var data = JSON.parse(content);

    flname.value = data.flname;
    phonenumber.value = data.phonenumber;
    email1.value = data.email;
    pickup.value = data.pickup;
    gatecode.value = data.gatecode;
   

    Storage.read(v5Data).then(
    function(content) {
    debug_log("Content Found in v1Data");
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

    Timer.create(function() {

        debug_log("Wait 100mili");

        bodyMessage = [

        date.value,

        flname.value,
        phonenumber.value,
        email1.value,
        pickup.value,
        gatecode.value,

        vyear5.value,
        vmake5.value,
        vmodel5.value,
        fueltype5.value,
        oiltype5.value,

        gasEmail.value,
        washEmail.value,
        tireEmail.value,
        oilEmail.value,
        detailEmail.value,

        totalCost.value
        ];
    }, 100, false);

    Timer.create(function(){
    debug_log("Wait 100mili");
	email.compose(sasiEmail.value,"","",date.value, JSON.stringify(bodyMessage))
    debug_log(sasiEmail.value, date.value, JSON.stringify(bodyMessage));
	router.goto("home");
    }, 100, false);
    },
   function(error) {
    //For now, let's expect the error to be because of the file not being found.
    debug_log("No Storage File Found");
    flname.value = "No";
    phonenumber.value = "Storage";
    email1.value = "Found";
    });
} else {
    debug_log("No date and/or services selected")
    }
}

module.exports = {
    dolla: dolla,
    tripCharge: tripCharge,
    fillGasTank: fillGasTank,
    carWashVaccum: carWashVaccum,
    rotateTires: rotateTires,
    changeOil: changeOil,
    detailInterior: detailInterior,

    gasClick: gasClick,
    washClick: washClick,
    tireClick: tireClick,
    oilClick: oilClick,
    detailClick: detailClick,

    monClick: monClick,
    tuesClick: tuesClick,
    wedClick: wedClick,
    thursClick: thursClick,

    totalCost: totalCost,

	cancelService: cancelService,
	confirmService: confirmService
};