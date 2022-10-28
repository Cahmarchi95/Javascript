//Prototypes
//são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
//as propriedades e os métodos são definidos na propriedade prototype nas funções construtoras dos Objetos

function Account (name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    }

const carol = new Account ("carol", 500);
const jorge = new Account ("jorge", 0);

//Colocando um nome para o banco através do prototype

Account.prototype.bank = "CHASE";

console.log(carol.bank);
console.log(jorge);

//para valores que não vão mudar, métodos,  funções e coisas que vão se repetir, é melhor colocá-las no prototype pq dá pra acessar da mesma forma mas não vai ocupar um espaço desnecessário caso fossem passadas como parâmetros
//passando a função deposit no prototype

Account.prototype.deposit = 
function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

carol.deposit(1000);
