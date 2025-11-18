'use strict';

function calculate() {
    let x, y, z;
    x = parseInt(prompt("Enter 1st number"));
    y = parseInt(prompt("Enter 2nd number"));
    z = parseInt(prompt("Enter 3rd number"));

    document.querySelector("#numbers").innerHTML =
        `Your numbers are: ${x}    ${y}    ${z}`;

    let sum, prod, avg;
    sum = x + y + z;
    prod = x * y * z;
    avg = sum / 3;

    document.querySelector("#sum").innerHTML =
        `The sum is ${sum}`;
    document.querySelector("#product").innerHTML =
        `The product is ${prod}`;
    document.querySelector("#average").innerHTML =
        `The average is ${avg}`;
}

function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

function diceSum() {
    let rolls, i, sum;
    rolls = parseInt(prompt("How many rolls?"));
    i = 0;
    sum = 0;

    do {
        let result = getRandomInt(1, 6);
        console.log("roll = " + result);
        sum += result;
        console.log(sum);
        i += 1;
    } while (i < rolls);

    document.querySelector("#dicesum").innerHTML =
        `After rolling ${rolls} times, the sum is ${sum}`;

}

function sumProb() {
    let dice, goal, tries, hits;
    dice = parseInt(prompt("How many dice?"));
    goal = parseInt(prompt("What sum do you want?"));
    tries = 10000;
    hits = 0;

    if (goal > (6 * dice)) {
        document.querySelector("#sum-probability").innerHTML =
            `Getting a sum of ${goal} is not possible with ${dice} dice.`;
        return;
    }

    for (let i = 1; i <= tries; i++) {
        let sum = 0;
        for ( let j = 1; j <= dice; j++) {
            sum += getRandomInt(1, 6);
        }
        if (sum === goal) {
            hits += 1;
        }
    }
    let chance, chancePerc;
    chance = hits / tries;
    chancePerc = (100 * chance).toFixed(2);
    document.querySelector("#sum-probability").innerHTML =
        `Probability to get sum ${goal} with ${dice} dice is ${chancePerc}%`

}