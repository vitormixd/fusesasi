var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");
var Timer = require("FuseJS/Timer")




function goTo1() {
  router.push("info1");
}

function goTo2() {
  router.push("info2");
}

function goTo3() {
  router.push("info3");
}

function goTo4() {
  router.push("info4");
}

function goTo5() {
  router.push("info5");
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