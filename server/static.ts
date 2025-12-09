import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent - works in both ESM source and CJS build
// When bundled by esbuild to CJS, __dirname will be available
// @ts-ignore - __dirname may be available in CJS build
const __dirname = typeof __dirname !== "undefined" 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

export function serveStatic(app: Express) {
  // In production, the built server is at dist/index.cjs
  // and the static files are at dist/public
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
