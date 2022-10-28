//This
//points to the left of the dot
// john.fullName() O this está apontando para a const john que é um objeto, lado esquerdo do ponto

/*const john = {
firstName:"john",
lastName: "anderson",
fullName: function() {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
},
};

const bob = {
  firstName: "anna",
  lastName: "sanders",
  fullName: function () {
    console.log(`My full name is Anna Sanders`);
  },
};

john.fullName();
//bob.fullName();*/

//210 THIS keyword advanced
//em funções regulares (não arrows) o "this" invoca a função (esquerda do .) senão tiver nada a esquerda, vai para o global que o objeto é window
//console.log(this);

function showThis (){
    console.log(this);
}

const john = {
    name: "john",
    showThis:showThis,
}

const bob = {
  name: "bob",
  showThis: showThis,
};

john.showThis();
bob.showThis();

showThis();

const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);