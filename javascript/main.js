const funButton = document.getElementById("fun-button");
const bodyElement = document.querySelector("body");
const headingElement = document.getElementById("fun-head");
const inputElement = document.getElementById("fun-text");
const buttonElement = document.getElementById("enter-button");

funButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "pink";
});

buttonElement.addEventListener("click", function (event) {
  let enteredFun = inputElement.value;
  headingElement.innerText = "Yes I like to do " + enteredFun + " as well";
});
