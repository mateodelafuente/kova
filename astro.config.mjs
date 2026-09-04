// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kovaarg.com.ar',
  // Salida estática: se puede subir tal cual a Vercel / Netlify / cualquier hosting.
  // Cuando el sitio necesite endpoints dinámicos (formularios, carrito), acá se
  // agrega un adaptador (`@astrojs/vercel`, `@astrojs/node`, etc.).
});
