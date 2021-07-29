import { defineConfig, UserConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"

const config = defineConfig({
  plugins: [reactRefresh()],
  root: "./src",
  resolve: {
    alias: {
      "~/": "/",
    },
  },
  build: {
    outDir: "../dist",
  },
  define: {
    ENV_SAMPLE_KEY: JSON.stringify("sample_env"),
  },
}) as UserConfig

export default config
