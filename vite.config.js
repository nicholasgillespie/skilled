import { defineConfig } from "vite";
import vitePurgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [vitePurgeCss()],
  base: "/skilled/",
  build: {
    emptyOutDir: true,
  },
});
