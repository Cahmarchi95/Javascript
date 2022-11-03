//VAR,LET,CONST
//var = define,update, redifine (isso não é bom porque pode dar bug no código)
//let = define , update.
//const = define.
//usar const ou let
//const cannot mutate primitive type

//define
var number = 100;
//console.log(number);
//update
number = 200;
//console.log(number);
//redefine
var number = "orange";
//console.log(number);

//define
let amount = 1000;
//console.log(amount);
//update
amount = 1500
//console.log(amount);

//define
const num = 50;
//console.log(num);

//não pode redefinir se for primitive type (string ou número). Agora se for passado com um objeto ou um array é possível redefinir uma variável do tipo const

const person = { name:"José"}
person.name = "john"
//console.log(person.name);


//let,const - blocked scoped {} - anything within {}

//var - function scoped

var value = 100;

function greet() {
    //local scope
    var random = `some random value`;
    console.log(`hello there ${value} ${random}`);
}
//console.log(random);

//a variável random que está dentro da função não pode ser acessada fora do escopo local
//greet()

//porém se for apenas {} a constante var consegue acessar o conteúdo, mesmo sendo escopo local

var total = 1000;
var test = true;

if (test){
    var total = "oranges and onions"
    console.log("hello there");
}

console.log(total);