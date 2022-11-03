//ARROW OBJECTS AND THIS
//reg function : "this" refers parent, left of the dot
//arrow function: refers to it's current surrounding scopen (window)

/*const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const ana = {
  firstName: "ana",
  lastName: "sanders",
  sayName: function(){
    console.log(this);
    setTimeout(() => {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },3000);
  },
};

bob.sayName();
ana.sayName();

//SELECT ELEMENTS //THIS

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);
  setTimeout(() => {
    this.style.color = "black";
  }, 2000);
});*/

//DEFAULT PARAMETERS, ARROW FUNCTION GOTCHAS

const john = "John";
const peter = "Peter";

function sayHi(person ="susan") {
  console.log(`Hi ${person}`);
}

const sayHello = (person = "bob") => console.log(`Hello ${person}`);

//nada como parâmetro vai aparecer undefined o default parameters nada mais é que atribuir um valor direto. ex: person = "Susan"
sayHi();
sayHello(peter);
