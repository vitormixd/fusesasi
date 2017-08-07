var Observable = require("FuseJS/Observable");

var bodytext = Observable(
  "This is the body of the text right here This is the body of the text right here"
);


function goBack() {
	router.push("serviceInfo");
}

module.exports = {
  bodytext: bodytext,
	goBack: goBack
};