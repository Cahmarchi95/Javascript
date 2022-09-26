//Arrays and for loops

/*const names = ["Anna", "Bob", "James", "Peter"];

const lastName = "Bond";

let fullName = [];

// for loop

for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  fullName.push(`${names[i]} ${lastName}`);
}

console.log(fullName);*/

//Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50,];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total >= 100){
    console.log(`Whoa! You are spending way too much`);
    return total;
  }
  console.log(`You are good, total is less than 100`);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
