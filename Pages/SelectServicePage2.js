var email = require('FuseJS/Email');







var totalCost = 




var sasiEmail = "sasi.version1@gmail.com";
var subject = "Service {date} for {flname}";
var bodyMessage = [
	{
		tripcharge: "$50"
		fillgastank: "$15*"
		carwasvaccum: "$50"
	}
]







function cancelService() {
	router.goBack();
}

function confirmService() {
	email.compose(sasiEmail,"","",subject,bodyMessage)
	router.goto("home");
}

module.exports = {

	cancelService: cancelService,
	confirmService: confirmService
};