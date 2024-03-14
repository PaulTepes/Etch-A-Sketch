document.addEventListener("DOMContentLoaded", function () {
  let mainContainer = document.querySelector("#main-container");

  for (let i = 1; i <= 16 * 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    mainContainer.appendChild(cell);
  }
});
