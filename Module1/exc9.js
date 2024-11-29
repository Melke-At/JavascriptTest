
'use strict'
let num = prompt('Enter an integer')
  if(num <= 1){
    document.querySelector('#target').innerHTML = `The number ${num} is not a prime number`

  }
  let divisorCount = 0;

  for (let i = 1; i <= num; i++){
    if (num % i === 0){
      divisorCount++
    }
  }
  if (divisorCount === 2){
        document.querySelector('#target').innerHTML = `The number ${num} is a prime number`

  }
  else {
        document.querySelector('#target').innerHTML = `The number ${num} is not a prime number`


}