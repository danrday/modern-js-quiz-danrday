"use strict";

let specificRobotArray = require("./specificRobots").specificRobotArray;

function robotFight(robot1Array, robot2Array) {
  let robot1Name = robot1Array[0];
  let robot1Type = robot1Array[1];
  let robot2Name = robot2Array[0];
  let robot2Type = robot2Array[1];

  console.log("robot1name", robot1Name);
  console.log("robot1type", robot1Type);
  console.log("robot2name", robot2Name);
  console.log("robot2type", robot2Type);

  for (var x in specificRobotArray) {
    if(robot1Type === specificRobotArray[x].name) {
    console.log("CHOSEN robot 1", specificRobotArray[x].name);
      }
    }

  for (var y in specificRobotArray) {
    if(robot2Type === specificRobotArray[y].name) {
    console.log("CHOSEN robot 2", specificRobotArray[y].name);
    console.log("getting robot 2 attack val", specificRobotArray[y]);
      }
    }
    

}

module.exports = {robotFight};