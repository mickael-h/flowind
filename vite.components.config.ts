import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/components/ui/index.ts'),
      name: 'FlowindDesignSystem',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['svelte', 'flowbite-svelte'],
      output: {
        globals: {
          svelte: 'Svelte',
          'flowbite-svelte': 'FlowbiteSvelte'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    // Don't bundle, just copy files
    copyPublicDir: false
  },
  resolve: {
    alias: {
      $lib: resolve(__dirname, 'src/lib')
    }
  }
});
