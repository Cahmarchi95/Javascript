//Key events (usado em formulários)

//keypress - quando uma tecla é pressionada ("apertar e soltar" as funções keydown e keyup juntas)
//keydown - quando uam tecla é "apertada para baixo (sem soltar)"
//keyup - quando uma tecla é "solta"

const nameInput = document.getElementById("name");

//nameInput.addEventListener("keypress", function () {
//  console.log("you pressed a key");
//});

//nameInput.addEventListener("keydown", function () {
//  console.log("you pressed a key");
//});

//exemplo de usar a função para "guardar" o valor do que foi digitado no input
//nameInput.addEventListener("keyup", function () {
//  console.dir(nameInput);
//});

//exemplo de pegar cada letra do que foi digitado (o evento "dispara" cada vez que uma tecla é solta)

//nameInput.addEventListener("keyup", function () {
//  console.log(nameInput.value);
//});

//Event Object
// vai retornar uma informação sobre o evento que foi "disparado"
//event.type (mostra qual tipo de evento é. Ex: click, key, mouse)
//eventcurrentTarget (ex: aparece no console qual o heading que você clicou. Sempre vai apontar algum elemento que está atrelado ao EventListener)
//this keyword (pode usar só a palavra this para selecionar, em vez de currentTarget)
//preventDefault () - prevents default behavior

/*const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
  console.log(this);
});

btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

link.addEventListener("click", function (event) {
  event.preventDefault();
});*/

//CURRENT TARGET X TARGET
//deixando o texto do botão verde ao clicar nele
//currentTarget: o evento ocorre de forma geral, todo o texto que está no botão ficará verde.
//target: o evento ocorre em um lugar específico (ex: somente na palavra que foi clicada e não no texto todo dentro do botão)

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    //e.currentTarget.style.color = "green";

    console.log(e.target);
    e.target.style.color = "green";
  });
});
