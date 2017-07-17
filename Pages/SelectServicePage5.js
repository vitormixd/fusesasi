var email = require('FuseJS/Email');







var totalCost = 




var sasiEmail = "sasi.version1@gmail.com";
var subject = Observable("Service {date} for {flname}");
var bodyMessage = [
	{
		tripcharge: "$50"
		fillgastank: "$15*"
		carwasvaccum: "$50"
	}
]







function cancelService5() {
	router.goBack();
}

function confirmService() {
	email.compose(sasiEmail,"","",subject,bodyMessage)
	router.goto("home");
}

module.exports = {

	cancelService5: cancelService5,
	confirmService: confirmService
};