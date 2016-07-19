"use strict";

let robotTypesArray = require("./robotTypes").robotTypesArray;

let Drone = robotTypesArray[0];
let Bipedal = robotTypesArray[1];
let ATV = robotTypesArray[2];
let RNG = require("./randomNumbers.js");


//specific robots//
function Drone01() {
    this.name = "Drone01";
    this.attack = "Flamethrower";
    this.minPoints = 50;
    this.maxPoints = 80;
    this.minDamage = 4;
    this.maxDamage = 8;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
Drone01.prototype = new Drone();

function Drone02() {
    this.name = "Drone02";
    this.attack = "Lasers";
    this.minPoints = 50;
    this.maxPoints = 90;
    this.minDamage = 2;
    this.maxDamage = 3;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
Drone02.prototype = new Drone();

function Bipedal01() {
    this.name = "Bipedal01";
    this.attack = "Missiles";
    this.minPoints = 30;
    this.maxPoints = 80;
    this.minDamage = 3;
    this.maxDamage = 7;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
Bipedal01.prototype = new Bipedal();

function Bipedal02() {
    this.name = "Bipedal02";
    this.attack = "Spinning Saw";
    this.minPoints = 40;
    this.maxPoints = 60;
    this.minDamage = 8;
    this.maxDamage = 9;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
Bipedal02.prototype = new Bipedal();

function ATV01() {
    this.name = "ATV01";
    this.attack = "Banana Peels";
    this.minPoints = 30;
    this.maxPoints = 80;
    this.minDamage = 3;
    this.maxDamage = 7;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
ATV01.prototype = new ATV();

function ATV02() {
    this.name = "ATV02";
    this.attack = "Acid Showers";
    this.minPoints = 40;
    this.maxPoints = 60;
    this.minDamage = 8;
    this.maxDamage = 9;
    this.healthPoints = RNG.randomRange(this.minPoints, this.maxPoints);
}
ATV02.prototype = new ATV();

let drone01 = new Drone01();
let drone02 = new Drone02();
let bipedal01 = new Bipedal01();
let bipedal02 = new Bipedal02();
let atv01 = new ATV01();
let atv02 = new ATV02();

let specificRobotArray = [drone01, drone02, bipedal01, bipedal02, atv01, atv02];

module.exports = {specificRobotArray};


