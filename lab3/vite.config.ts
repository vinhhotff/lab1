import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path để cấu hình alias

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Thêm alias cho "@"
    },
  },
  base: "/",
  build: {
    outDir: "dist"
  },
  server: {
    fs: {
      strict: false
    }
  }
});
