"use strict";

let $ = require("jquery");

let d20Random = require("./randomNumbers.js").d20Random;

let randomRange = require("./randomNumbers.js").randomRange

let specificRobotArray = require("./specificRobots").specificRobotArray;

function robotFight(robot1Array, robot2Array) {
  let robot1Name = robot1Array[0];
  let robot2Name = robot2Array[0];

  let robot1Type = robot1Array[1];
  let robot2Type = robot2Array[1];

  let builtRobot1 = null;
  let builtRobot2 = null;

  for (var x in specificRobotArray) {
    if(robot1Type === specificRobotArray[x].name) {
    builtRobot1 = specificRobotArray[x];
      }
    }

  for (var y in specificRobotArray) {
    if(robot2Type === specificRobotArray[y].name) {
    builtRobot2 = specificRobotArray[y];
      }
    }

    console.log("HEALTH ROBOT 1", builtRobot1.healthPoints)
    console.log("HEALTH ROBOT 2", builtRobot2.healthPoints)
    console.log("DAMAGE ROBOT 1", builtRobot1.minDamage)
    console.log("DAMAGE ROBOT 2", builtRobot2.minDamage)

     $("#output").append(`${robot1Name} Starting Health: ${builtRobot1.healthPoints}`);
      $("#output").append("----");
      $("#output").append(`${robot2Name} Starting Health: ${builtRobot2.healthPoints}`);


    var intervalID = window.setInterval(myCallback, 1500);

    function myCallback() {

      let robot1Damage = randomRange(builtRobot1.minDamage, builtRobot1.maxDamage);

       let robot2Damage = randomRange(builtRobot2.minDamage, builtRobot2.maxDamage);

      console.log("robot1Damage", robot1Damage)
      console.log("robot2Damage", robot2Damage)

      let diceRoll = d20Random();

      console.log("diceRoll", diceRoll)
     
    }

    if (builtRobot2.healthPoints <= 0 || builtRobot1.healthPoints <= 0) {
      window.clearInterval(intervalID)
    };

    // if (builtRobot1.healthPoints >= builtRobot2.healthPoints) {

    // } else {

    // }

}

module.exports = {robotFight};