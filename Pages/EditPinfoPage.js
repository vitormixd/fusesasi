var Context = require("Modules/Context");

var pinfo = this.Parameter;

var flname = pinfo.map(function(x) { return x.flname; });
var phonenumber = pinfo.map(function(x) { return x.phonenumber; });
var email = pinfo.map(function(x) { return x.email; });
var pickup = pinfo.map(function(x) { return x.pickup; });
var gatecode = pinfo.map(function(x) { return x.gatecode; });

function cancelpinfo() {
	// Refresh personal information value to reset dependent Observables' values
	pinfo.value = pinfo.value;
	router.goBack();
}

function savepinfo() {
	Context.updatePinfo(pinfo.value.pid, flname.value, phonenumber.value, email.value, pickup.value, gatecode.value);
	router.goBack();
}


module.exports = {
	flname: flname,
	phonenumber: phonenumber,
	email: email,
	pickup: pickup,
	gatecode: gatecode,

	cancelpinfo: cancelpinfo,
	savepinfo: savepinfo
};