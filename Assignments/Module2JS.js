'use strict'

function reverseNumber() {
    const numList = [];
    for (let j = 1; j <= 5; j++) {
        let number = parseInt(prompt(`Enter number ${j}`));
        numList.push(number);
    }
    console.log(numList);
    let reverseList = [];
    let i = 1;
    for (let num in numList) {
        reverseList.push(numList[numList.length - i]);
        i++;
    }
    console.log(reverseList);
    document.getElementById("reversedNumbers").innerText = `${reverseList.toString()} \n (Also in console!)`;
}

// CREATE AND PRINT AN ORDERED LIST OF NAMES
function makeList(times) {
    const listLength = document.querySelector("#orderedNames").childElementCount;
    if (listLength > 0) {
        // console.log(document.querySelector("#orderedNames").childElementCount);
        let list = document.querySelector("#orderedNames");
        for (let i = 1; i <= listLength; i++) {
            document.querySelector("#orderedNames li").remove();
        }
        // console.log(list);
    }

    if (times <= 0) {
        document.getElementById('nameNumber').label = 'Invalid number';
        return;
    }

    const namesUnsorted = [];

    for (let i = 1; i <= times; i++) {
        let name = prompt("Enter name");
        namesUnsorted.push(name);
    }
    console.log(namesUnsorted);
    let sortedNames = namesUnsorted.sort();
    console.log(sortedNames);
    for (let name of sortedNames) {
        let newItem = document.createElement('li');
        newItem.innerText = name;
        document.getElementById('orderedNames').append(newItem);
    }
    console.log(document.querySelectorAll("#orderedNames"));
}

// STORE AND DISPLAY VOTES FOR GIVEN CANDIDATES
function runVote(c, v) {
    const running = [];

    // ENTER CANDIDATE NAMES
    for (let i = 1; i <= c; i++) {
        let name = prompt(`Name for candidate ${i}`);
        let candv = {
            name: name,
            votes: 0,
        }
        running.push(candv);
    }

    // RECORD NAMES FOR LATER
    const names = []
    for (let place of running) {
        names.push(place.name)
    }
    console.log(names)

    // CAST VOTES
    for (let i=1; i<=v; i++) {
        let cast = prompt(`Vote ${i} (empty input = empty vote)`);
        if (cast === "") {
            console.log(`Vote skipped!`);
        } else if (names.includes(cast)) {
            for (let place of running) {
                if (cast === place.name) {
                    place.votes++;
                }
            }
        } else {
            alert(`Candidate name not in list!`);
            i--;
        }
    }

    console.log(running);

    // SORT RESULTS BY VOTE COUNTS
    let sorted = running.sort((a, b) => {
        // console.log(a.votes, b.votes);
        return b.votes - a.votes;
    })
    console.log(sorted);

    // PRINT RESULTS TO CONSOLE
    let result = `The winner is ${sorted[0].name} with ${sorted[0].votes} votes.\nresults:\n`;
    for (let place of sorted) {
        result = result + (`${place.name}: ${place.votes} votes\n`);
    }
    console.log(result);
    document.getElementById("finalVote").innerText = "Results printed to console!"


}