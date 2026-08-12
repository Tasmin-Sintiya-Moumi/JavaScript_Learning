//  Build a counter page: a number display plus Increase, Decrease, and Reset buttons.

const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let number = 10;

increase.addEventListener('click', () => {
    number++;
    count.textContent = number;
});

decrease.addEventListener('click', () => {
    number--;
    count.textContent = number;
});

reset.addEventListener('click', () => {
    number = 0;
    count.textContent = number;
});

