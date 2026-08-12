/*  Build a character counter: as the user types in a textarea, show 'X characters' live (use the 'input' 
event). */

const count = document.querySelector("#count");
const text = document.querySelector("#text");

let character = 0;

text.addEventListener('input', () => {
    character = text.value.length;
    count.textContent = character;
});