import api from "./services/api.js";
console.log(import.meta.env.VITE_PORTKEY_API_KEY);

window.app = Object.create({ api });
