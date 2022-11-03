//Template Strings/Literals
// `` backticks above tab key left of 1 key
/*
const name = "bob";
const lastName = "sanders";
const age = 25;

const phrase =
"My full name is " + name + " " + lastName + " and I'm " + age + " years old.";
//console.log(phrase);

const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${age} years old.`;

console.log(phrase2);


//usando `` para inserir html dinamicamente no código

const person = {
  name: "kyle",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.getElementById("result");

result.innerHTML = `<h2> ${person.name}</h2> <p> ${person.job} </p>
<ul>${person.hobbies.map(function(item){ return `<li>${item}</li>`;

})
.join("")}</ul>`*/

//TAGGED TEMPLATE LITERALS

const author = "Some Author";
const statement = "Some Statement";

const quote = highLight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

//fazer uma função para deixar o texto das variáveis azul e adicionar dinamicamente no html usando template strings `${}`

function highLight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class ="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
