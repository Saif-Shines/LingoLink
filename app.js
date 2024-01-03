import api from "./services/API.js";
import Banner from "./components/Banner.js";

console.log(import.meta.env.VITE_PORTKEY_API_KEY);
const appBanner = document.createElement("app-banner");
document.querySelector("body").insertAdjacentElement("afterbegin", appBanner);
window.app = Object.create({ api });
