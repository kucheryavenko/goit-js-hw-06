const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const decrementClick = () => value.textContent = counterValue -= 1;
const incrementClick = () => value.textContent = counterValue += 1;

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);

