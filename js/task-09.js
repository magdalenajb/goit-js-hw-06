function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgColor = document.querySelector("body");
const changeButton = document.querySelector(".change-color");
const textName = document.querySelector(".color");

function changeColor(event) {
  backgColor.style.backgroundColor = getRandomHexColor();
  textName.textContent = getRandomHexColor();
}

changeButton.addEventListener("click", changeColor);