function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls>input");
const bntCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const addElements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    addElements.push(div);
  }
  return addElements;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

bntCreate.addEventListener("click", () => {
  let addBoxes = createBoxes(input.value);
  boxes.append(...addBoxes);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
