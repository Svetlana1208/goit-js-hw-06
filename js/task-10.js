function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("div#boxes");
const amount = document.querySelector("#controls>input").value;
const createBtn = document.querySelector('button[data-create="create"]');

createBtn.addEventListener('click', createBoxes);


function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement('div');
    el.style.width = "30px";
    el.style.backgroundColor = getRandomHexColor();
    elements.push(el);
  }
boxes.append(...elements);
}


