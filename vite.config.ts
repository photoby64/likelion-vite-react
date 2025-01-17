import { defineConfig } from 'vite';


const viteConfig = defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
	  port: 8080
  },
  css: {
    devSourcemap: true
  }
});

export default viteConfig;