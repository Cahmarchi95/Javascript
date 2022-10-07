//Event Propagation

//permite selecionar os elementos dinamicamente
//event propogation - ordena os eventos "disparados"
//event bubbling - clica no elemento primeiro e aí bubbles up -- default (ocorre uma reação em cadeia de pai para filhos até window, "sentido decrescente")
//event capturing - fires at the root and fires until reaches target (dispara na raiz e vai indo através da cadeia de "filhos" window-document-container "sentido crescente")

/*const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("currentTarget", e.currentTarget);
  //console.log("target", e.target);
  //if (e.target.classList.contains("link")) {
  // console.log("you clicked on the link");
  // }
}

//função para parar a propagação

function stopPropagation(e) {
  e.stopPropagation();
  console.log("you clicked on list");
}

//list.addEventListener("click", stopPropagation);
list.addEventListener("click", showBubbling,{capture:true});
container.addEventListener("click", showBubbling,{capture:true});
window.addEventListener("click", showBubbling,{capture:true});
document.addEventListener("click", showBubbling,{capture:true});
*/

//EXEMPLO EVENT PROPAGATION

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
//const heading = document.querySelector(".heading");

function sayHello() {
  console.log("Hello there");
}

//criando h1 de forma dinâmica ao clicar no botão
btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});

//uma forma de acessar o heading através do pai que é o container

container.addEventListener("click", function (e) {
  if (event.target.classList.contains("heading")) {
    console.log("hello there");
  }
});

//heading.addEventListener("click", sayHello);
