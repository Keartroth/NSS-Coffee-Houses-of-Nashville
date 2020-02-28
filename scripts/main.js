import coffeeMaker from "./coffeeMaker.js";

const hideEvent = () => {
  const button = document.getElementById("see-places");
  button.classList.add("hide-me");
}

const showEvent = () => {
  const button = document.getElementById("hidden");
  button.classList.remove("hide-me");
}

const initializeGifEvent = () => {
  const button = document.querySelector("#see-places");
  button.addEventListener("click",hideEvent);
  button.addEventListener("click", showEvent);
  button.addEventListener("click",coffeeMaker);
};

initializeGifEvent();