'use strict';
const names = ['John', 'Paul', 'Jones'];
let mylist = document.querySelector('#target');
mylist.innerHTML = '<li></li><li></li><li></li>';
let allitems = mylist.querySelectorAll('li');
let pos = 0;
for (let item of allitems) {
    item.innerHTML = `${names[pos]}`;
    pos++;
}