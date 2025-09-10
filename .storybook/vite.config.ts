import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "global.crypto": "crypto",
  },
  optimizeDeps: {
    exclude: ["fsevents"], // avoid mac-only deps errors
  },
});
