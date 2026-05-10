// ============================================================================
// Vercel-only Vite config. NOT used by Lovable preview.
//
// كيفية الاستخدام على جهازك (مش هنا):
//   1) bun remove @lovable.dev/vite-tanstack-config
//   2) bun add -D @tanstack/react-start vite @vitejs/plugin-react @tailwindcss/vite vite-tsconfig-paths
//   3) rm wrangler.jsonc src/server.ts
//   4) mv vite.config.ts vite.config.lovable.ts.bak
//   5) mv vite.config.vercel.ts vite.config.ts
//   6) git push  -> Vercel هيعمل build تلقائي
// ============================================================================
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "vercel",
      customViteReactPlugin: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
