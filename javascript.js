function createGrid() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 16*16; i++) {
    div = document.createElement("div");
    div.style.backgroundColor = createColor();
    container.appendChild(div);
  }
}

function createColor() {
  red = Math.floor(Math.random() * 255 + 1);
  green = Math.floor(Math.random() * 255 + 1);
  blue = Math.floor(Math.random() * 255 + 1);
  rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  return rgbColor;
}
