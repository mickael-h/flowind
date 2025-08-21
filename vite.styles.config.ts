import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/lib/styles/**/*'],
      outDir: 'dist/styles',
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/styles/index.ts'),
      name: 'FlowindStyles',
      fileName: 'styles/index',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    outDir: 'dist',
    emptyOutDir: false // Don't empty since components build also uses this dir
  },
  resolve: {
    alias: {
      $lib: resolve(__dirname, 'src/lib')
    }
  }
});
