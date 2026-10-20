import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Misma política que envía Nginx; en GitHub Pages (sin cabeceras propias) llega como meta.
// Solo en build: el servidor de desarrollo inyecta estilos en línea.
const CSP =
  "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; " +
  "connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'";

function cspMeta(): Plugin {
  return {
    name: 'csp-meta',
    apply: 'build',
    transformIndexHtml: () => [
      { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
    ],
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), cspMeta()],
  build: {
    target: 'es2020',
    // Las fuentes se sirven como archivos propios; la CSP no admite data: para fuentes.
    assetsInlineLimit: 0,
  },
});
