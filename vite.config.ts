import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// Get __dirname equivalent for ESM - works in all Node.js environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use __dirname for reliable path resolution (relative to config file)
// This works consistently in all environments including Vercel
const rootDir = __dirname;
const clientDir = path.resolve(rootDir, "client");
const distDir = path.resolve(rootDir, "dist", "public");
const indexHtmlPath = path.resolve(clientDir, "index.html");

const replitPlugins = process.env.NODE_ENV !== "production" &&
  process.env.REPL_ID !== undefined
    ? await Promise.all([
        import("@replit/vite-plugin-cartographer")
          .then((m) => m.cartographer())
          .catch(() => null),
        import("@replit/vite-plugin-dev-banner")
          .then((m) => m.devBanner())
          .catch(() => null),
      ]).then((plugins) => plugins.filter((p) => p !== null))
    : [];

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...replitPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: clientDir,
  build: {
    outDir: distDir,
    emptyOutDir: true,
    rollupOptions: {
      input: indexHtmlPath,
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
