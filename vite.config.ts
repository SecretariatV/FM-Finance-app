/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },

    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@contexts": "/src/contexts",
        "@features": "/src/features",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
    test: {
      globals: true,
      css: true,
      environment: "happy-dom",
      setupFiles: "./src/setupTest.ts",
    },
  };
});
