import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // supaya bisa import pakai @/components dll
    },
  },
  server: {
    port: 5173, // bisa ubah kalau bentrok
    open: true, // otomatis buka di browser
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
