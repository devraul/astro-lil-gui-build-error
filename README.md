# Astro + lil-gui => build error

![site dev mode with lil-gui](./assets/site.png)

## Steps to repro

1. install deps: `pnpm i`;
1. run dev server: `pnpm run dev` (everything should be working);
1. stop dev server;
1. run a build: `pnpm run build`
1. see the error:
   ```
   error   The requested module 'lil-gui' does not provide an export named 'default'
   file:///Users/raulmelo/development/sandbox/test-lil-gui/dist/chunks/pages/script_d5fa1c97.mjs:1
   import GUI from 'lil-gui';
         ^^^
   SyntaxError: The requested module 'lil-gui' does not provide an export named 'default'
       at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
       at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
   ```

## Workaround 1

1. open `lil-gui` package.json (`node_modules/lil-gui/package.json`);
1. add the following:
   ```json
   "exports":{
       ".":{
       "import": "./dist/lil-gui.esm.js",
       "require": "./dist/lil-gui.umd.js"
       }
   },
   ```
1. run build again;
1. now everything will work

## Workaround 2

Based on [this comment](https://github.com/vitejs/vite/issues/14332#issuecomment-1715987090), I've realized that's another workaround.

1. open `astro.config.mjs` file;
1. define `vite.ssr.noExternal`;
1. add the library to the array:
   ```js
   export default defineConfig({
     vite: {
       ssr: {
         noExternal: ["lil-gui"],
       },
     },
   });
   ```

The error will go away.

### Reference

- [https://vite-plugin-ssr.com/broken-npm-package](https://vite-plugin-ssr.com/broken-npm-package)
