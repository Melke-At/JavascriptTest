'use strict'
let numeral = Number(prompt('How many times do you want to roll? '));
if (numeral <= 0){
  document.querySelector('#target').innerHTML = `Please enter a valid number.`;

}
else {
  let sum = 0;
  for (let i = 0; i < numeral; i++){
    let roll = Math.floor(Math.random()*6 + 1)
    sum += roll;
  }
  document.querySelector("#target").innerHTML = `The sum of ${numeral} roll results is ${sum}.`;
}