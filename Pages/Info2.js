var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "If this service is selected, your gas tank will be filled to the brim with the fuel type you have specified on the Vehicle Page. We charge the cost of the fill plus $15 dollars. We will provide the receipt along with our vehicle report on your passenger seat."
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};