"use strict";

let robotFight = require("./robotFight").robotFight;
let $ = require('jquery'); 
let specificRobots = require("./specificRobots");
let robotTypes = require("./robotTypes");

let $robot1 = $("#robot1");
let $robot2 = $("#robot2");

let $typeRobot1 = $("#typeRobot1");
let $typeRobot2 = $("#typeRobot2");

let $makeRobot1 = $("#makeRobot1");
let $makeRobot2 = $("#makeRobot2");

let $attack = $("#attack");

let robot1Array = null;
let robot2Array = null;

//initializer
$makeRobot1.click(function() {
  console.log($typeRobot1.val())
  if ($robot1.val() === "") {
    alert("Enter a robot name");
  } 
  if ($typeRobot1.val() === null) {
     alert("Enter a robot type");
  }
});
$makeRobot2.click(function() {
  console.log($typeRobot2.val())
  if ($robot2.val() === "") {
    alert("Enter a robot name");
  } 
  if ($robot2.val() === "") {
     alert("Enter a robot type");
  }
});
$attack.click(function() {
  if ($robot1.val() === "" || $typeRobot1.val() === null || $robot2.val() === "" || $robot2.val() === "") {
    alert("Please fill in all fields")
  }
  else {

    let robot1Name = $robot1.val();
    let robot1Type = $typeRobot1.val();
    let robot2Name = $robot2.val();
    let robot2Type = $typeRobot2.val();

    robot1Array = [robot1Name, robot1Type];
    robot2Array = [robot2Name, robot2Type];

    robotFight(robot1Array, robot2Array);

  }
})


