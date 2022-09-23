function calculateTotal(subTotal, tax) {
  //const Total = subTotal + tax;
  return subTotal + tax;
}

//console.log(calculateTotal(100, 150));

const order1 = calculateTotal(20, 30);
const order2 = calculateTotal(30, 50);
const order3 = calculateTotal(80, 20);

console.log(order1, order2, order3);

const Tot = function (subTotal, tax) {
  return subTotal + tax;
};

const values = [Tot(400, 100)];

console.log(values);
