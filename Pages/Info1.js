var Observable = require("FuseJS/Observable");
var phone = require("FuseJS/Phone");

var bodytext = Observable(
  "Welcome to SASi. We automate your vehicle’s maintenance out of your life. We pick up your vehicle after 8pm on the date you select and return it by 5am the next morning. Ordering services and a selecting a date is quick and easy with our app. To get started we will need some information from you as well a method of accessing your vehicle late at night. To open an account and set up a meeting to discuss this, please call us at 480-577-3773 or use the Call Now button below."
);

function callUs() {
	phone.call("+1 480 577 3773");
}

function goBack() {
	router.push("serviceInfo");
}

module.exports = {
 	bodytext: bodytext,
	callUs: callUs,
	goBack: goBack
};