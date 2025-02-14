import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      DEV_PORT: JSON.stringify(env.VITE_APP_DEV_PORT), // Make it valid JSON
    },
    server: {
      port: Number(env.VITE_APP_DEV_PORT) || 3000,
      host: true,
    },
    plugins: [vue()],
  };
  
});