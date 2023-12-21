import Portkey from "portkey-ai";

const portkey = new Portkey({
  apiKey: import.meta.env.VITE_PORTKEY_API_KEY,
  virtualKey: "open-ai-key-66a67d",
  dangerouslyAllowBrowser: true,
});

const api = {
  chatCompletions: async function () {
    let response = await portkey.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a excellent polyglot and are able to translate english into languages like French, Spanish and Japanese",
        },
        {
          role: "user",
          content: "Tell me about Paris?",
        },
      ],
    });
    console.log(response.choices[0].message.content);
  },
};

export default api;
