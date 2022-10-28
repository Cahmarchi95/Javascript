//Call- runs instantly, arguments - list of items
//chama a função e o this vai apontar para o objeto que você quiser tanto uma função separada, como uma função dentro de um objeto (método);

/*const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, i'm ${this.name} and I'm ${this.age} years old`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};

//john.greet();

function greet() {
  console.log(this);
  console.log(`Hello, i'm ${this.name} and I'm ${this.age} years old`);
}

//call na fução greet separada
greet.call(john);
greet.call(susan);
//call função greet passando diretamente outros valores para os parâmetros
greet.call({ name: "peter", age: 30 });
//call usando a fução que estava dentro da const john para chamar susan e trocar os valores
john.greet.call(susan);

//Apply- runs instantly, arguments - array of items

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, i'm ${this.name} and I'm ${this.age} years old and I live in ${city} , ${country}`
  );
}

//no call os argumentos são passados em forma de lista
//greet.call(john, "san diego", "us");
//greet.call(susan, "san diego", "us");
//greet.call({ name: "peter", age: 30, city: "san diego", country: "us" });

//para passar os argumentos precisa colocar entre "[]". Array items
greet.apply(john,["san diego", "us"]);
greet.apply(susan, ["california", "us"]);
greet.apply({ name: "peter", age: 30} , ["texas", "us"]);

//Bind- assign, use later, arguments- list of items
//precisa invocar a função, não roda instantaneamente como no call e no apply

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, i'm ${this.name} and I'm ${this.age} years old and I live in ${city} , ${country}`
  );
}

const susanGreet = greet.bind(susan, "toronto", "ca");
//invovando a função
susanGreet();*/

//EXEMPLO DE BIND COM BOTÃO

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");

//falha pq o this aponta para o botão e não para o contador
//btn.addEventListener("click", counter.increment);

//consertando o erro usando bind para apontar para o contador ao cliccar no botão. Só que não é possivel remover o addEventListener dessa forma.
//btn.addEventListener("click", counter.increment.bind(counter));

// usando bind novamente só que podendo remover o addEventListener (essa é a solução de escolha)
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
