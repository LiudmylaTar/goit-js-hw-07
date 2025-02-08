const controls = document.querySelector(`#controls`);
const inputNumb = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
}

createBtn.addEventListener("click", () => {
  const amount = Number(inputNumb.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputNumb.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);