'use strict'
let n1 = parseInt(prompt('Enter the first number '));
let n2 = parseInt(prompt('Enter an second number '));
let n3 = parseInt(prompt('Enter an third number '));

let sum = n1 + n2 + n3;
let product = n1 * n2 * n3;
let average = sum/3;
document.querySelector('#target').innerHTML = `sum: ${sum} <br> product: ${product} <br> average: ${average.toFixed(2)}`;
