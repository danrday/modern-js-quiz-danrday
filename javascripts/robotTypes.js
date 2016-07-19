"use strict";

let RNG = require("./randomNumbers.js");

//base robot function
function Robot () {
  this.name = null;
  this.minPoints = null;
  this.maxPoints = null;
  this.minDamage = null;
  this.maxDamage = null;
  this.evasionChance = RNG.randomRange(0, 10);
  this.healthPoints = null;
}

function Drone() {
  this.name = "Drone";
  // this.minPoints = minHealthPoints;
  // this.maxPoints = maxHealthPoints;
  // this.minDamage = minDamagePoints;
  // this.maxDamage = maxDamagePoints;
  // this.evasionChance = RNG.randomRange(0, 10);
  // this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

function Bipedal() {
  this.name = "Bipedal";
  // this.minPoints = minHealthPoints;
  // this.maxPoints = maxHealthPoints;
  // this.minDamage = minDamagePoints;
  // this.maxDamage = maxDamagePoints;
  // this.evasionChance = RNG.randomRange(0, 10);
  // this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

function ATV() {
  this.name = "ATV";
  // this.minPoints = minHealthPoints;
  // this.maxPoints = maxHealthPoints;
  // this.minDamage = minDamagePoints;
  // this.maxDamage = maxDamagePoints;
  // this.evasionChance = RNG.randomRange(0, 10);
  // this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

let robotTypesArray = [Drone, Bipedal, ATV];

module.exports = {robotTypesArray};
