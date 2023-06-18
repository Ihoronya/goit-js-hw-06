const buttonСhangeСolor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonСhangeСolor.addEventListener("click", onButtonСhangeСolorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onButtonСhangeСolorClick() {
  const currentColor = (document.body.style.backgroundColor =
    getRandomHexColor());

  colorSpan.textContent = `${currentColor}`;
}