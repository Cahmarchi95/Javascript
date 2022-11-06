//Three methods to convert objects into arrays
//Object.keys() - converts property names into array
//Object.values() - converts property values into array
//Object.entries() - converts both

const person = {
  name: "john",
  age: 25,
  status: "student",
};

//Object.keys()
const keys = Object.keys(person);
//console.log(keys);

//Object.values()
const values = Object.values(person);
//console.log(values);

//Object.entries();
const result = Object.entries(person);
//console.log(result);

//map method
//mesmo resultado do Object.keys()

const newResult = result.map((item) => {
  const [first, second] = item;
  return first;
});

//console.log(newResult);

//for of
// extrair o que está dentro do objeto, valores e chaves

for (const [first, second] of result) {
  console.log(first, second);
}
