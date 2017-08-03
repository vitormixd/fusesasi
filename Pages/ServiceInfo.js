var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");
var Timer = require("FuseJS/Timer")




function goTo1() {
  router.push("home");
}

function goTo2() {
  router.push("home");
}

function goTo3() {
  router.push("home");
}

function goTo4() {
  router.push("home");
}

function goTo5() {
  router.push("home");
}

function goToHome() {
	router.push("home");
}

module.exports = {
  goTo1: goTo1,
  goTo2: goTo2,
  goTo3: goTo3,
  goTo4: goTo4,
  goTo5: goTo5,

	goToHome: goToHome
};