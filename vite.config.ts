// @lovable.dev/vite-tanstack-config already includes the required TanStack Start,
// React, Tailwind, tsconfig paths, route generation, and Nitro build plugins.
// Keep deployment-specific Nitro options here so Netlify and local builds create
// the same serverless output shape.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this entry for the Netlify Function handler.
    server: { entry: "server" },
  },
  nitro: {
    // Netlify's build environment can auto-detect Nitro, but pinning the preset
    // keeps CI, local builds, and Netlify deployments deterministic.
    preset: "netlify",
  },
});
