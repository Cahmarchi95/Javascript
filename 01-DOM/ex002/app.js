// querySelector (qualquer seletor css) seleciona um elemento.
// querySelectorAll (qualquer seletor css) seleciona todos elementos
//podem ser usados os métodos do array (como map, filter, find, for each)
// se for id usar "#"" se for class usar "."

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
//console.log(item);

const lastItem = document.querySelector("li:last-child");
//console.log(lastItem);

const list = document.querySelectorAll(".special");
console.log(list);

list.forEach(function (item) {
  item.style.color = "yellow";
});
