var Observable = require("FuseJS/Observable");
var phone = require("FuseJS/Phone");

var bodytext = Observable(
  "Welcome to SASi. We automate the maintenance of your vehicles out of your life. We pick up your vehicle after 8pm and have it returned to you before you know it is gone at 5 am. Ordering services and a selecting a date is quick and easy with our app. To get started we will need some information from you as well a method of accessing your vehicle late at night. To set up an account and meeting to discuss this, please call us at 480-577-3773 or use Call Now below."
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