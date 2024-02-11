const controls = document.getElementById("controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
    for (let i = 0; i < amount; i++){
        let newDiv = document.createElement(`div`)
        const colorDiv = getRandomHexColor();
        newDiv.style.width = `${ 30 + 10 * 1 }px`;
        newDiv.style.height = `${ 30 + 10 * 1 }px`;
        newDiv.style.backgroundColor = `${colorDiv}`;
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


// Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку Create має рендеритися(додаватися в DOM)
//  колекція з відповідною кількістю елементів і очищатися значення в інпуті.При повторному натисканні на кнопку Create поверх 
//  старої колекції має рендеритись нова. 
// Після натискання на кнопку Destroy колекція елементів має очищатися.