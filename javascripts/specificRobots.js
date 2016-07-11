"use strict";

let robotTypesArray = require("./robotTypes").robotTypesArray;

//
let Drone = robotTypesArray[0];

let Bipedal = robotTypesArray[1];

let ATV = robotTypesArray[2];

//

// console.log("array", robotTypesArray);
// console.log("Drone", robotTypesArray[0]);
// console.log("Bipedal", robotTypesArray[1]);
// console.log("ATV", robotTypesArray[2]);

//specific robots//
function Drone01() {
    this.name = "Drone01";
    this.attack = "Flamethrower";
    // this.image = ""
}
Drone01.prototype = new Drone(50, 80, 4, 8);

console.log("drone01", Drone01)

function Drone02() {
    this.name = "Drone02";
    this.attack = "Lasers";
    // this.image = ""
}
Drone02.prototype = new Drone(80, 90, 2, 3);

function Bipedal01() {
    this.name = "Bipedal01";
    this.attack = "Missiles";
    // this.image = ""
}
Bipedal01.prototype = new Bipedal(30, 80, 3, 7);

function Bipedal02() {
    this.name = "Bipedal02";
    this.attack = "Spinning Saw";
    // this.image = ""
}
Bipedal02.prototype = new Bipedal(40, 60, 8, 9);

function ATV01() {
    this.name = "ATV01";
    this.attack = "Banana Peels";
    // this.image = ""
}
ATV01.prototype = new ATV(30, 80, 3, 7);

function ATV02() {
    this.name = "ATV02";
    this.attack = "Acid Showers";
    // this.image = ""
}
ATV02.prototype = new ATV(40, 60, 8, 9);

let drone01 = new Drone01();
let drone02 = new Drone02();
let bipedal01 = new Bipedal01();
let bipedal02 = new Bipedal02();
let atv01 = new ATV01();
let atv02 = new ATV02();

console.log("drone01 !!!", drone01);

// console.log("Drone01", Drone01);
// console.log("Drone02", Drone02);
// console.log("Bipedal01", Bipedal01);
// console.log("Bipedal02", Bipedal02);
// console.log("ATV01", ATV01);
// console.log("ATV01", ATV02);

let specificRobotArray = [drone01, drone02, bipedal01, bipedal02, atv01, atv02];

module.exports = {specificRobotArray};


