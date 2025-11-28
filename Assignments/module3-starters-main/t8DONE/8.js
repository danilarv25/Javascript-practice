'use strict';
const button = document.querySelector('#start');
button.addEventListener('click', calculate);
const result = document.querySelector('#result')

function calculate() {
    let op = document.querySelector('#operation').value;
    if (op === 'add') {
        let x = document.querySelector('#num1').value;
        let xfloat = parseFloat(x);
        let y = document.querySelector('#num2').value;
        let yfloat = parseFloat(y);
        let z = xfloat + yfloat;
        // console.log(z);
        // console.log(z.toString());
        result.innerText = z.toString()
    } else if (op === 'sub') {
        let x = document.querySelector('#num1').value;
        let xfloat = parseFloat(x);
        let y = document.querySelector('#num2').value;
        let yfloat = parseFloat(y);
        let z = xfloat - yfloat;
        // console.log(z);
        // console.log(z.toString());
        result.innerText = z.toString()
    } else if (op === 'multi') {
        let x = document.querySelector('#num1').value;
        let xfloat = parseFloat(x);
        let y = document.querySelector('#num2').value;
        let yfloat = parseFloat(y);
        let z = xfloat * yfloat;
        // console.log(z);
        // console.log(z.toString());
        result.innerText = z.toString()
    } else if (op === 'div') {
        let x = document.querySelector('#num1').value;
        let xfloat = parseFloat(x);
        let y = document.querySelector('#num2').value;
        let yfloat = parseFloat(y);
        let z = xfloat / yfloat;
        // console.log(z);
        // console.log(z.toString());
        result.innerText = z.toString()
    }
}