const funButton = document.getElementById("fun-button");
const bodyElement = document.querySelector("body");
const headingElement = document.getElementById("fun-head");
const inputElement = document.getElementById("fun-text");
const buttonElement = document.getElementById("enter-button");
//got help from chatGPT
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

buttonElement.addEventListener("click", function () {
  const enteredFun = inputElement.value;
  headingElement.innerText = "Yes I like to do " + enteredFun + " as well";
});

funButton.addEventListener("click", function () {
  bodyElement.style.backgroundColor = getRandomColor();
  confetti();
});
