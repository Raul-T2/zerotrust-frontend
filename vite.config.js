import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// En local, /api se reenvia al backend (puerto 3000).
// En AWS, Nginx hara este mismo reenvio hacia la IP privada del backend (VPC Peering).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
