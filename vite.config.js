import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      proxy: {
        "/v1": {
          target:
            "https://api.portkey.ai",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/v1"),
        },
      },
    },
  };
});
