let painting = document.querySelector(".painting");
let palette = document.querySelector(".palette");
let pix = document.querySelectorAll(".pixel");
let selectedColor = "blue";

function pixar(e) {
  target = e.target;
  target.style.backgroundColor = selectedColor;
  if (selectedColor === "blue") {
    selectedColor = "red";
  } else if (selectedColor === "red") {
    selectedColor = "yellow";
  } else if (selectedColor === "yellow") {
    selectedColor = "green";
  } else if (selectedColor === "green") {
    selectedColor = "purple";
  } else {
    selectedColor = "blue";
  }
}

painting.addEventListener("click", pixar);

// double click
painting.addEventListener("dblclick", function () {
  selectedColor = "white";
});

// created color purple
let purple = document.createElement("div");
purple.setAttribute("class", "color-choice");
purple.setAttribute("id", "purple");
purple.textContent = "■";
// appending new color (purple)
palette.append(purple);

//  clear button creation
let btn = document.createElement("button");
btn.textContent = "Clear";
// appending clear
document.body.append(btn);

// turned node list ".pixel" into an array
let pixArry = [...pix];

// clear button
btn.addEventListener("click", function () {
  pixArry.forEach((pix) => {
    pix.style.backgroundColor = "white";
  });
});
