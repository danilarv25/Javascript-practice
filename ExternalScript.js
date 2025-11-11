'use strict'; // indicates that the code should be executed in "strict mode"
              // With strict mode, you can not, for example, use undeclared variables.

console.log("This is a console message!");

// alert("What the helly");

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let agenum = parseInt(age);
let hobby = prompt("What is your favorite hobby:");
let x = parseInt(prompt("Pick any number:"));
let agenext = agenum + x;

console.log(name);
console.log(age);
console.log(hobby);
console.log(name + "'s age in " + x + " years: " + agenext);

document.
    querySelector('#js-message').
    innerHTML =
    name + "'s age: " + agenum + "<br>" +
    name + "'s hobby: " + hobby + "<br>" +
    name + "'s age in " + x + " years: " + agenext;

const sometext =
    `${name} Pack it up
pack it in`;

console.log(sometext);