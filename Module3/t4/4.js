'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const comb = document.querySelector("#target");
comb.innerHTML = "";

 for(let student of students){
  const melke = document.createElement("option");
  melke.text = `${student.name}`
  melke.value = `${student.id}`
   comb.appendChild(melke);
}



