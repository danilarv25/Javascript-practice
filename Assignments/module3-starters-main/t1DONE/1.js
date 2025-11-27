'use strict';
const items = ["First item", "Second item", "Third item"];
let mylist = document.getElementById("target")
let edits = mylist.innerHTML = '<li>First item</li>' +
    '<li>Second item</li>' +
    '<li>Third item</li>';
mylist.setAttribute("class", "my-list");