var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "If this service is selected, your vehicle will be run through a car wash and towel-dried as well as have the interior of the vehicle vacuumed. The cost of this service is $20"
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};