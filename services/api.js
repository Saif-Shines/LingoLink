import axios from "axios";

const api = {
  promptPolygloat: async function (options) {
    try {
      const { data: response } = await axios.request(options);
      return response.choices[0].message.content;
    } catch (error) {
      console.error("Encountered an Error", error);
    }
  },
};

export default api;
