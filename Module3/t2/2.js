const list = document.querySelector("#target")

list.innerHTML= "";
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");

item1.textContent = "First Item";
list.appendChild(item1);
item2.textContent = "Second Item";
list.appendChild(item2);
item3.textContent = "Third Item";
list.appendChild(item3);