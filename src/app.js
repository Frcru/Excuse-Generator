/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseGenerator();
  // $("#excuse").text(excuseGenerator());
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function excuseGenerator() {
  //Generate all index
  let excuseGenerated;
  let whoIndex = indexGenerator(who);
  let actionIndex = indexGenerator(action);
  let whatIndex = indexGenerator(what);
  let whenIndex = indexGenerator(when);

  //Array to get all random array's index to
  let allIndex = [whoIndex, actionIndex, whatIndex, whenIndex];

  excuseGenerated = mergeString(allIndex);

  return excuseGenerated;
}

function indexGenerator(size) {
  let index = Math.floor(Math.random() * size.length);

  return index;
}

function mergeString(allIndex) {
  let stringGenerated;

  stringGenerated = `${who[allIndex[0]]} 
      ${action[allIndex[1]]} 
      ${what[allIndex[2]]} 
      ${when[allIndex[3]]}`;
  return stringGenerated;
}
