const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueFirst = document.querySelector("#value");
let counterValue = Number(valueFirst.textContent);

function decrement() { counterValue--; valueFirst.textContent = counterValue};
buttonDecrement.addEventListener("click", decrement);

function increment() { counterValue ++; valueFirst.textContent = counterValue}
buttonIncrement.addEventListener("click", increment);

