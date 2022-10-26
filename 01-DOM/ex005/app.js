//classList (para adicionar mais de uma classe a um elemento, precisa usar .add e passar o nome da classe que você quer adicionar. Também é possível remover uma classe e checar se ela existe.É uma forma mais recomendada para utilizar pois o className sobrescreve os dados)
//className (ver qual é o nome da classe do item slecionado, adicionar uma classe a um item que não tenha, cuidado pois mais de uma classe uma vai se sobrepor a outra)

/*const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

//ver o nome da classe
const firstValue = first.className;
console.log(firstValue);

//add classe
second.className = "colors";

//add classe com o class list
third.classList.add("colors", "text");

//removendo uma classe
second.classList.remove("colors");

//contain
let result = first.classList.contains("colors");
if (result) {
  console.log("Contains colors");
} else {
  console.log("Not contain colors"); 
}*/

//createElement ("element" você passa qual elemento vai ser criado)
//createTextNode ("text content" você passa qual conteúdo quer no texto)
//element.appendChild (childElement) serve para "juntar" o que você criou(ex: o texto novo dentro da nova div e essa div dentro do body)

const result = document.querySelector("#result");
const first = document.querySelector(".red");

//criando um elemento vazio
const bodyDiv = document.createElement("div");
console.log(bodyDiv);

//criando um textNode
const text = document.createTextNode("Criando um texto para a div body");

//fazendo o append do texto para dentro da div
bodyDiv.appendChild(text);

//insertBefore (precisa de dois parâmetros o elemento que você quer adicionar "element" e onde você quer adicionar "location")
document.body.insertBefore(bodyDiv, result);

//colocando a nova div dentro do body
//document.body.appendChild(bodyDiv);

//outros exemplos, result element

const heading = document.createElement("h2");
const headingText = document.createTextNode("Adicionando h2 de forma dinâmica");
heading.appendChild(headingText);
heading.classList.add("blue");
//result.appendChild(heading);

result.insertBefore(heading, first);

//criando outra heading para representar o replaceChild (precisa passar o elemento novo e o nome do elemento que você quer substituir)

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`i'm a small text`);
smallHeading.classList.add("green");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
