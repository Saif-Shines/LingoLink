import api from "./API.js";

const options = {
  method: "POST",
  url: `/v1/prompts/${import.meta.env.VITE_PORTKEY_PROMPT_ID}/completions`,
  headers: {
    "x-portkey-api-key": import.meta.env.VITE_PORTKEY_API_KEY,
    "x-portkey-config": import.meta.env.VITE_PORTKEY_CONFIG_ID,
    "Content-Type": "application/json",
  },
  data: { variables: { language: "French", textToTranslate: "Hello!" } },
};

export default async function translate(language, textToTranslate) {
  const variables = {
    language,
    textToTranslate,
  };

  options.data.variables = variables;

  let translation = await api.promptPolygloat(options);
  console.log(translation);
  return String(translation);
}
