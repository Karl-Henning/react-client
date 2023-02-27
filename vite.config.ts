/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
});

// test functionallity, not implementation. Try approach testing from a user perspective. Telling User Stories though tests.
