import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({ typescript: false }),
    sentryVitePlugin({
      org: "synfs",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
