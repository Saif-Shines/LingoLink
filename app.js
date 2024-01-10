import api from "./services/API.js";
import Banner from "./components/Banner.js";
import translate from "./services/Translate.js";

const appBanner = document.createElement("app-banner");
document.querySelector("body").insertAdjacentElement("afterbegin", appBanner);

window.app = Object.create({
  api,
  services: {
    translate,
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-boundary");
  let translation;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const textToTranslate = document.querySelector("#user-input").value;
    const language = document.querySelector("#language").value;
    const translationHTML = document.querySelector("#translation");
    const buttonHTML = document.querySelector("button");
    buttonHTML.innerText = "translating...";
    translation = await translate(language, textToTranslate);
    translationHTML.insertAdjacentText("afterbegin", translation);
    buttonHTML.innerText = "translate again";
  });
});
