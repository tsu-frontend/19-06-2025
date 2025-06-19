import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: ".", // Optional, default is '.'
  build: {
    outDir: "dist", // Where to output the build files
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
