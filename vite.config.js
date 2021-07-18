import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: "./src",
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: "/",
      },
    ],
  },

  define: {
    ENV_SAMPLE_KEY: JSON.stringify("sample_env"),
  },
});
