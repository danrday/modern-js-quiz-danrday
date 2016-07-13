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

$("#pickDoor").hide();

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

    $("#robotMaker").hide();

    let robot1Name = $robot1.val();
    let robot1Type = $typeRobot1.val();
    let robot2Name = $robot2.val();
    let robot2Type = $typeRobot2.val();

    robot1Array = [robot1Name, robot1Type];
    robot2Array = [robot2Name, robot2Type];

    robotFight(robot1Array, robot2Array);
  }
})

//testing moving stuff from robotFight to main.js

let builtRobot1 = null;
let builtRobot2 = null;

function robotFight(robot1Array, robot2Array) {
  let robot1Name = robot1Array[0];
  let robot2Name = robot2Array[0];
  let robot1Type = robot1Array[1];
  let robot2Type = robot2Array[1];

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
}

function printInitialStats() {
  //prints robot names and starting health

    $("#output").append(`<div class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Starting Health: ${builtRobot1.healthPoints} ---- ${robot2Name}(${builtRobot2.name})'s Starting Health: ${builtRobot2.healthPoints}</div>`);

    $("#output").append(`<div class="healthUpdate">${robot1Name} Damage Chance: ${builtRobot1.minDamage} pts / ${builtRobot1.maxDamage} pts ---- ${robot2Name} Damage Chance: ${builtRobot2.minDamage} pts / ${builtRobot2.maxDamage} pts</div>`);

}

let counter = 1;

function doorClick() {

    let $door1 = $("#door1"); 
    let $door2 = $("#door2"); 
    let $door3 = $("#door3"); 

      $door1.click(function() {
          doorClicked = 1;
          extraDamage(diceRoll);
        });
      $door2.click(function() {
          doorClicked = 2;
          extraDamage(diceRoll);
        });
      $door3.click(function() {
          doorClicked = 3;
          extraDamage(diceRoll);
        });

}

function extraDamage() {
      $("#pickDoor").hide()
      let $output = $("#output");

      if (oneInThree === doorClicked) {

        $output.prepend(`<div class="player1">`);
        $output.prepend(`<p class="player1">You picked right! You did an extra damage of ${diceRoll} points.</p>`);

      //takes away health from robot2
      builtRobot2.healthPoints -= diceRoll;

      $output.prepend(`<p>Robot 1 Health: ${builtRobot1.healthPoints} pts. Robot 2 Health: ${builtRobot2.healthPoints} pts. </p>`);

      $output.prepend(`</div>`);

      } else {
        doorClicked === null;
        $output.prepend(`<div class="player1">`);
        $output.prepend(`<p>Sorry, the right door # was ${oneInThree}</p>`);
        $output.prepend(`</div>`);
      }
    };





