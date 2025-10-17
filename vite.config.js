import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 配置文件
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    host: '0.0.0.0',
    port: 3000
  }
});
