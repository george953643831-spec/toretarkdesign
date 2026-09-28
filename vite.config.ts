import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const publicPrefixPlugin: Plugin = {
  name: 'public-prefix-handler',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url && req.url.startsWith('/public/')) {
        req.url = req.url.replace(/^\/public\//, '/');
      }
      next();
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [publicPrefixPlugin, react(), tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      ignored: ['**/src/assets/images/**']
    }
  }
});
