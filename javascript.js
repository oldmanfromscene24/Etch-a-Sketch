const container = document.querySelector(".container");
const button = document.querySelector("button");
for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.classList.add("0"); //class used to track how many times this div has been mouseover
  div.id = i;
  container.appendChild(div);
}
container.addEventListener("mouseover", (e) => {
  const rgbValuesArray = e.target.style.backgroundColor.slice(4, -1).split(",");
  if (e.target.className < 10)
    e.target.style.backgroundColor = createColor(
      e.target.className,
      e.target.id,
      rgbValuesArray
    );
});

button.addEventListener("click", changeGrid);

function createColor(hoverNum, id, rgb) {
  let rgbValues;
  if (hoverNum == 0) {
    rgbValues = createRgbValues();
    let hovered = document.getElementById(id);
    hovered.className = parseInt(hovered.className) + 1;
    console.log(hovered.className);
  } else rgbValues = darkTen(hoverNum, id, rgb);
  const rgbColor =
    "rgb(" + rgbValues[0] + "," + rgbValues[1] + "," + rgbValues[2] + ")";
  return rgbColor;
}

function createRgbValues() {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  return [red, green, blue];
}

function darkTen(hoverNum, id, rgb) {
  let hovered = document.getElementById(id);
  hovered.className = parseInt(hovered.className) + 1;
  return [0, 0, 0];
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
    container.appendChild(div);
  }
}
