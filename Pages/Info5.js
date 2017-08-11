var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "If this service is selected, your vehicle’s oil will be drained and replaced with the manufactured suggested oil unless otherwise specified in the Vehicle Information Page. A new oil filter will also be installed. The cost of this service is $65"
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};