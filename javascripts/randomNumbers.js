"use strict";

let d3Random = () => 
  Math.floor(Math.random() * (3 - 1 + 1) + 1);


// function d20Random should take no args and return a value between 1 and 20 randomly
let d20Random = () => 
  Math.floor(Math.random() * (20 - 1 + 1) + 1);


//function random range should take a min and max range and return a radon value in that range
let randomRange = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);


module.exports = {d20Random, randomRange, d3Random};