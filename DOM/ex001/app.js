//Get element by ID ***********************************************************************

/*Atribuindo a uma variável (quando quiser fazer muitas mudanças, fica mais fácil atribuir a uma variável)

const h1 = document.getElementById("title");
h1.style.color = "red";

//const btn = document.getElementById("btn");
//btn.style.color = "black";


// passando direto, sem uma variável

document.getElementById("btn").style.backgroundColor = "blue";

document.getElementById("btn").style.color = "white"; 

//Get Elements by tag name**************
// HTMLCollection = vai se comportar um array como um objeto
//é possivel acessar o index, lenght mas não os métodos de array por exemplo,(forEach)

const headings = document.getElementsByTagName("h2");
console.log(headings.length);
headings[0].style.color = "purple";

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";
items[0].style.color = "red"; */

//Get element by Class Name***********************************
// É parecido com o tag by name só que usa classe como parâmetro

const listItems = document.getElementsByClassName("special");
listItems[3].style.color = "blue";

console.log(listItems);
