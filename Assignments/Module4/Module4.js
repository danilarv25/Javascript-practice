'use strict';
const apiPrompt =
    'https://api.tvmaze.com/search/shows?q=';

const showForm = document.querySelector("#showForm");

showForm.addEventListener('submit', async function (evt) {
    const value_from_input = showForm.querySelector("#query2").value;
    evt.preventDefault();
    console.log(value_from_input);
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
})

const thrShowForm = document.querySelector("#showForm3");

thrShowForm.addEventListener('submit', async function (evt) {
    let thrValue = thrShowForm.querySelector("#query3").value;
    let showCount = document.querySelectorAll(".show-container").length;
    if (showCount > 0) {
        for (let i = 1; i <= showCount; i++) {
            document.querySelector(".show-container").remove();
        }
    }
    evt.preventDefault();
    try {
        let response = await fetch(`https://api.tvmaze.com/search/shows?q=${thrValue}`);
        let jsonData = await response.json();
        console.log(jsonData);

        for (let index of jsonData) {
            let div = document.createElement('div');
            div.setAttribute("class", "show-container");
            // let h = document.createElement('h2');
            // h.innerText = index.show.name;
            // h.setAttribute("class", "show-title")
            document.querySelector('body').append(div);
            // document.querySelector('.show-container').append(h);
        }
        let showDivsNode = document.querySelectorAll("div.show-container");
        console.log(showDivsNode);
        let showDivsArray = [...showDivsNode];
        let i = 0
        showDivsNode.forEach(div => {
            let showName = jsonData[i].show.name;
            let h = document.createElement("h2");
            h.innerText = showName;
            h.setAttribute("class", "show-title");
            div.appendChild(h);
            let a = document.createElement("a");
            a.innerText = jsonData[i].show.url;
            a.setAttribute("target", "_blank");
            div.appendChild(a);
            let br = document.createElement("br");
            div.appendChild(br);
            let image = document.createElement("img");
            let imgURL = jsonData[i].show.image?.medium;
            let shownImg = imgURL === undefined ? "https://placehold.co/210x295?text=Not%20Found" : jsonData[i].show.image?.medium;
            image.setAttribute("src", shownImg);
            image.setAttribute("alt", showName);
            div.appendChild(image);
            let showDesc = document.createElement("div");
            showDesc.innerHTML = jsonData[i].show.summary;
            div.appendChild(showDesc);
            i++;
        })
    } catch (error) {
        console.log(error.message);
    }
})

// async function getTVMinfo() {
//     const value_from_input = showForm.querySelector('#query').value;
//     console.log(value_from_input.toString())
//     const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
//     const jsonData = await response.json();
//     console.log(jsonData)
// }