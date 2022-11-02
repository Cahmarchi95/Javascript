//Closure
//closure gives you access to an outer function's scope from an inner function
//make private variables with closures
/*
function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello the secret is : ${privateVar}`);
  }
  return inner;
  inner();
}

//através de mais um parênteses a função outer tem acesso a função inner
outer()();

//através de uma variavel a função outer tbm tem acesso a estrutura da função inner
const value = outer();
console.log(value);

//acesso direto ao console log da função inner "invocando a variável"
value();

//EXEMPLO CLOSURE

function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    return showBalance;
}

newAccount("susan", 500)();

const john = newAccount("john", 300);
const bob = newAccount("bob", 700);

john();
bob();*/

//EXEMPLO COMPLETO
//retornando um objeto
//showbalance vira um método
//e a variável balance fica protegida

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount("john", 300);
const bob = newAccount("bob", 700);

john.showBalance();
john.deposit(400);
john.deposit(400);
john.withdraw(1000);
