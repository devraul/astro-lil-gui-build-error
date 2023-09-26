import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      /**
       * Workaround. Uncomment the `noExternal` line to fix the error:
       * @see https://vite-plugin-ssr.com/broken-npm-package
       */
      // noExternal: ["lil-gui"],
    },
  },
});
