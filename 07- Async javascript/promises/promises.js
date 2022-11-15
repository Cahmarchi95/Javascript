//callbacks, promises, async/await
//PROMISES - Pending, Resolved(fulfilled), Rejected
//then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("working");
});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve(`hey value is true`);
  } else {
    reject(`there was an error, value is false`);
  }
});

//console.log(promise);

//para acessar os valores da promise quando o status é fulfilled
//dentro do then passar o nome do parâmetro e a callbackfunction com a ação desejada
//catch para indicar o console log da frase de erro que estava na promise

promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
