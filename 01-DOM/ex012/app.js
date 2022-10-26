//FORMS
//submit event listener
//preventDefault (ao apertar submit ele não atualiza a página sozinho. Assim é possivel guardar os valores dos inputs)
//como guardar o valor do input
//selecionar o input e acessar a propriedade "value" ex: name.value

/*const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  console.log(name.value);
  console.log(password.value);
});*/

//LOCAL STORAGE
//API
//session storage, local storage (funcionam da mesma forma , só que o local storage continua com os valores quando a janela é fechada, já o session atualiza e fica vazio)
//setItem, getItem, removeItem, clear

//localStorage.setItem ("name", "john");
//sessionStorage.setItem ("name", "john");

/*localStorage.setItem("name", "john");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("adress", "street 123");

const name = localStorage.getItem("name");
console.log(name);

const adress = localStorage.getItem("adress");
console.log(adress);

localStorage.removeItem("name");
localStorage.clear();

//LOCAL STORAGE WITH MULTIPLE VALUES
// JSON.stringify() = para guardar o , o objeto. Sem alterar a forma.
//JSON.parse() = para acessar o conteúdo do array, objeto, string.

const friends = ["john", "peter", "bob"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);

//exemplo varíavel fruit. Vai checar se existe valor dentro do array. Se tiver, guardar na variável, senão vai aparecer como vazio (null)*/

/*let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
fruits.push("apple");
localStorage.setItem("fruits", JSON.stringify(fruits));*/

var fruits = [];
fruits.push("uva");
fruits.push("carambola");
localStorage.setItem("fruits", JSON.stringify(fruits));
var storedFruits = JSON.parse(localStorage.getItem("fruits"));
