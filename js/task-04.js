let counterValue = 0;

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

btnDecrementRef.addEventListener("click", decrement);
btnIncrementRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
