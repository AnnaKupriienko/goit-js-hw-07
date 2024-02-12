const controls = document.getElementById("controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxContainer = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  amount = input.value;
  if (amount < 1 || amount > 100) {
    return;
  }
  boxContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    let newDiv = document.createElement(`div`)
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(newDiv)
    console.log(newDiv)
  }
  input.value = '';
  }   

function destroyBoxes() {
  boxContainer.innerHTML = '';
}
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
