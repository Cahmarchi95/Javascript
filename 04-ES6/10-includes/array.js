//Array includes () - checks if the item is an array
//useful in the conditional statements

const groceries = ["milk", "bread", "meat"];

let randomItem = "lemon";
randomItem = "milk"

//const isIncluded = groceries.includes(randomItem);
//console.log(isIncluded);

if(groceries.includes(randomItem)) {
    console.log(`Yeah! it's on the list`);
} else{
console.log(`Sorry can't find this item`);
}