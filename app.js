import api from "./services/API.js";
console.log(import.meta.env.VITE_PORTKEY_API_KEY);

window.app = Object.create({ api });
