// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на button.change - color
//  і задає це значення кольору текстовим вмістом для span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
const btn = document.querySelector(".change-color")
const body = document.querySelector("body")
const span = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener("click", changeColor)
function changeColor() {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor
   span.textContent = newColor
}
