// My random button for generating color
let randBtn = document.querySelector("#random-btn");

randBtn.addEventListener("click", generateColor);

function generateColor() {
   let body = document.querySelector("body");
   let hexColor = document.querySelector("#color-value");

   let hexValue = "#";

   for (let i = 0; i < 6; i++) {
      let randomize = Math.floor(Math.random() * 16).toString(16);
      hexValue += randomize;
   }

   body.style.backgroundColor = hexValue;
   hexColor.textContent = hexValue;
}
