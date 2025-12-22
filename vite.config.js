import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // 👈 Isi package ka error aa raha tha

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Is plugin ko yahan call karna zaroori hai
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})