//ES6 classes - Syntatic Sugar (uma forma mais simples de usar as regras do prototype)
//precisa da palavra new

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "Chase";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 100);
console.log(john);
john.deposit(200);

const bob = new Account("bob", 0);
console.log(bob);
bob.deposit(1500);
