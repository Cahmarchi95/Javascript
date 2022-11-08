//select all span's with .number
const items = [...document.querySelectorAll(".number")];

//create updateCount function
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue} +`;
  }, 1);
};

//iterate over and log each span
items.forEach((item) => {
  updateCount(item);
});
