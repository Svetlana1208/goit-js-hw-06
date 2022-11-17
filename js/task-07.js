const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


range.addEventListener('change', onRanged);

function onRanged () {
    text.style.fontSize = `${range.value}px`;
};
