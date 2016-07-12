"use strict";

function d3Random(){
  var d3RandNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  return d3RandNumber;
}

// function d20Random should take no args and return a value between 1 and 20 randomly
function d20Random(){
  var d20RandNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  return d20RandNumber;
}
//function random range should take a min and max range and return a radon value in that range
function randomRange(min, max){
  var rangeRandNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return rangeRandNumber;
}

module.exports = {d20Random, randomRange, d3Random};