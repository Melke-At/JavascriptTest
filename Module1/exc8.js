'use strict'

const startYear = prompt('Enter the beginning year');
const endYear = prompt('Enter the ending year ');
const leapYear = [];

for (let i = startYear; i <= endYear; i++){
  if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
      document.querySelector('#target').innerHTML += `<li>${i}</li>`
}
}