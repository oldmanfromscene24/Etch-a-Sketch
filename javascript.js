const container = document.querySelector(".container");
const button = document.querySelector("button");
for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.classList.add("0"); // class counts how many times this div has been mouseover
  div.id = i;
  container.appendChild(div);
}
container.addEventListener("mouseover", (e) => {
  if (e.target.className < 10)
    e.target.style.backgroundColor = createColor(e.target.id);
});

button.addEventListener("click", changeGrid);

function createColor(id) {
  let hovered = document.getElementById(id);
  hovered.className = parseInt(hovered.className) + 1; // mouseover + 1
  let rgbValues = createRgbValues(parseInt(hovered.className), id);
  const rgbColor =
    "rgb(" + rgbValues[0] + "," + rgbValues[1] + "," + rgbValues[2] + ")";
  return rgbColor;
}

function createRgbValues(hoverNum, id) {
  if (hoverNum === 10) return [0, 0, 0];
  else if (hoverNum > 1) {
    const rgbValuesArray = document
      .getElementById(id)
      .style.backgroundColor.slice(4, -1)
      .split(",");
    const darkRed = rgbValuesArray[0] - (rgbValuesArray[0] / 10) * hoverNum;
    const darkGreen = rgbValuesArray[1] - (rgbValuesArray[1] / 10) * hoverNum;
    const darkBlue = rgbValuesArray[2] - (rgbValuesArray[2] / 10) * hoverNum;
    return [darkRed, darkGreen, darkBlue];
  } else
    return [
      Math.floor(Math.random() * 255 + 1), //red
      Math.floor(Math.random() * 255 + 1), //green
      Math.floor(Math.random() * 255 + 1), //blue
    ];
}

function changeGrid() {
  let size = parseInt(prompt("Size?"));

  while (size > 99 || size < 0)
    size = parseInt(prompt("Insert a positive number smaller than 100"));

  while (container.firstChild) container.removeChild(container.firstChild);

  const divSize = 960 / size + "px";

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.style.width = divSize;
    div.style.height = divSize;
    div.classList.add("0");
    div.id = i;
    container.appendChild(div);
  }
}
