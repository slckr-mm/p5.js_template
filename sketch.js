// referencing TypeScript Definitions for autocomplete & IntelliSense
/// <reference path="./TSDef/p5.global-mode.d.ts" />
"use strict";

// vanilla JS
console.log('~ sketch.js ~');
let slider;

// p5 code starts here
function setup() {
  createCanvas(600, 600);
  frameRate(30); // increase for smoother animations
  print("Hello");
  slider = createSlider(0, 100, 50, 1);
}

function draw() {
  let val = slider.value();
  background(val);
  stroke('rgb(0,255,0)');
  strokeWeight(5);
  line(20, 20, 20, 20 + val);
}