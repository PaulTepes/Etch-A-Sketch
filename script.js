document.addEventListener("DOMContentLoaded", function () {
  let mainContainer = document.querySelector("#main-container");
  let newGridButton = document.querySelector("#new-grid");
  let resetButton = document.querySelector("#reset");
  let gridSize = 16;
  document.documentElement.style.setProperty("--jsnumber", gridSize);
  makeGrid(gridSize);
  hoverCells();

  resetButton.addEventListener("click", () => {
    removeAllChildren(mainContainer);
    gridSize = 16;
    document.documentElement.style.setProperty("--jsnumber", gridSize);
    makeGrid(gridSize);
    // hoverCells();
  });

  newGridButton.addEventListener("click", () => {
    gridSize = prompt("Enter grid size from 1 to 100", "100");
    removeAllChildren(mainContainer);
    document.documentElement.style.setProperty("--jsnumber", gridSize);
    makeGrid(gridSize);
  });

  function removeAllChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function makeGrid(gridSize) {
    for (let i = 1; i <= gridSize ** 2; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      mainContainer.appendChild(cell);
    }
    hoverCells();
  }
});
let rgbButton = document.querySelector("#rgb-switcher");
let cells = document.querySelectorAll(".cell");

function hoverCells() {
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.removeEventListener("mouseover", addHoverClass);
    cell.removeEventListener("mouseover", RgbColorStyleChange);
    cell.addEventListener("mouseover", addHoverClass);
  });
}

function addHoverClass() {
  this.classList.add("hovered-cell");
}
// RGB button + mouseover

function RgbColorStyleChange() {
  var randomColor = generateRandomColor();
  this.style.backgroundColor = randomColor;
}

rgbButton.addEventListener("click", () => {
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.removeEventListener("mouseover", addHoverClass);
    cell.removeEventListener("mouseover", RgbColorStyleChange);
    cell.addEventListener("mouseover", RgbColorStyleChange);
  });
});

//random generated color RGB
function random255() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  var r = random255();
  var g = random255();
  var b = random255();
  return `rgb(${r},${g},${b})`;
}
