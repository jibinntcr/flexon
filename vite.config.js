import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5174,
    host: true,
    watch: {
      ignored: [
        '**/Photos/**',
        '**/dist/**',
        '**/Website Plan/**',
        '**/LogoAssets/**',
        '**/Team/**'
      ]
    }
  },
  preview: {
    port: 4174,
    host: true
  }
});
