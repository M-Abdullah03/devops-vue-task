import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({  mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      DEV_PORT: env.VITE_APP_DEV_PORT,
    },
    server: {
      port: Number(env.VITE_APP_DEV_PORT) || 3000,
      host: true,
    },
    plugins: [vue()],
  };
});
