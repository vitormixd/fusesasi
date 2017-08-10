var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "If this service is selected, your gas tank will be filled with the fuel type you have specified on the Vehicle Information Page. We will provide the receipt from the gas station along with our vehicle report on your passenger seat. The cost of this service is $15 plus the cost of the fuel."
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};