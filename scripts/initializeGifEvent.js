import hideEvent from "./hideEvent.js";
import showEvent from "./showEvent.js";
import coffeeMaker from "./coffeeMaker.js";

const initializeGifEvent = () => {
  const button = document.querySelector("#see-places");
  button.addEventListener("click",hideEvent);
  button.addEventListener("click", showEvent);
  button.addEventListener("click",coffeeMaker);
};

export default initializeGifEvent;