var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "If this service is selected, the tires on your vehicle will be rotated. The front left tire will be placed on the rear right position and the front right tire will be placed on the rear left position. The rear tires get rotated directly to the front without swapping sides. If your vehicle has directional tires, please let us know. The cost of this service is $20"
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};