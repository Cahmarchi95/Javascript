function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection} selector, no such element exists"`
    );
  }
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    console.log(this.resetBtn);
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.increaseBtn.addEventListener("click", this.increase.bind(this));
    this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
    this.resetBtn.addEventListener("click", this.reset.bind(this));
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
