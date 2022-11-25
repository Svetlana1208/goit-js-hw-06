function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector("div#boxes");
const field = document.querySelector("input");
let amount;

field.addEventListener('change', event => {
  amount = field.value;
})

const createBtn = document.querySelector('button[data-create]');
createBtn.addEventListener('click', createBoxes);

function createBoxes () {
  const elements = [];
  let startSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${startSize}px`;
    el.style.height = `${startSize}px`;
    el.style.backgroundColor = getRandomHexColor();
    elements.push(el);
    startSize += 10;
  }
  boxes.append(...elements);
}

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes () {
boxes.remove()}