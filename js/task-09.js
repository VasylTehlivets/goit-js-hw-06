function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const buttonChangeColor = document.querySelector(".change-color");

const colorValue = document.querySelector(".color");

buttonChangeColor.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValue.textContent = color;
  console.log(color);
});
