const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrement.addEventListener('click', event => {
    counterValue -= 1;
    value.textContent = counterValue;
});

increment.addEventListener('click', event => {
    counterValue += 1;
    value.textContent = counterValue;
});
