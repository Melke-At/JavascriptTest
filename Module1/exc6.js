'use strict'
const result =  Math.sqrt()

let answer = confirm('Should I calculate the square root?');
if (answer === false) {
  document.querySelector('#target').innerHTML = 'The square root is not calculated'
}
if (answer === true) {
  let num = Number(prompt('Enter number'));
  if (num >= 0) {
    document.querySelector('#target').innerHTML = `The square root of ${num} is ${Math.sqrt(num).toFixed(3)}`;
  } else if (num < 0) {
    document.querySelector('#target').innerHTML = `The square root of a negative number is undefined`;

  } else {
    document.querySelector('#target').innerHTML = 'Please enter a valid number'
  }
}


