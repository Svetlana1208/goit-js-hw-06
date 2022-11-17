function getRandomHexColor() {
  const currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return currentColor;
  console.log(currentColor);
}

const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('button.change-color');
buttonChangeColor.addEventListener('click', changeColor);

function changeColor () {
  body.style.backgroundColor = getRandomHexColor();

const colorName = document.querySelector('span.color');
colorName.textContent = `${body.style.backgroundColor}`;
}