import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: https://jackmiller825.github.io/PT/
export default defineConfig({
  base: "/PT/",
  plugins: [react()],
});
