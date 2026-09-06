# KOVA — sitio web

Sitio de marca de KOVA / KOVA Pets. Estado actual: **alpha** (home de marca,
sin carrito ni backend todavía).

## Cómo correrlo

Necesitás [Node.js](https://nodejs.org) 22 (ver `.nvmrc`).

```bash
npm install
npm run dev
```

Abre en `http://localhost:4321`.

Otros comandos:

```bash
npm run build     # genera el sitio final en dist/
npm run preview   # sirve dist/ para revisar el build de producción
```

## Estructura del proyecto

```
src/
  pages/            → una página del sitio por archivo. index.astro es la home.
                       Astro convierte cada archivo acá en una URL (routing por archivos).
  layouts/
    BaseLayout.astro → el molde de toda página: <head>, header, footer, tema.
  components/       → piezas reutilizables (botones, tarjetas, header, footer).
    sections/       → bloques grandes de una página (Hero, Colección, Historia...).
                       Una página se arma combinando secciones, como bloques de Lego.
  data/             → contenido editable sin tocar diseño: productos, textos de marca,
                       navegación, pilares. Para cambiar un precio o agregar un producto,
                       se edita acá — nunca hace falta tocar los componentes.
  img/              → TODAS las imágenes del sitio (fotos e íconos), sin excepción
                       ni copias en ningún otro lado. Ver src/img/README.md.
  styles/
    tokens.css      → paleta de colores, tipografías y espaciados de la marca.
                       Cambiar un color acá lo cambia en todo el sitio.
    global.css      → estilos base compartidos (botones, contenedores, reset).

public/             → solo el favicon (tiene que vivir en una ruta fija por cómo
                       lo pide el navegador). Ninguna otra imagen va acá.

dist/               → se genera solo con `npm run build` — nunca se edita a mano,
                       se borra y se rehace en cada build. No es un lugar donde
                       "poner" nada.
```

**Regla simple:** si es contenido (texto, precio, producto nuevo) → `src/data/`.
Si es una pieza visual nueva → `src/components/`. Si es una página nueva →
`src/pages/`.

## Tema claro / oscuro

El sitio tiene dos paletas — "Warm" (clara) y "Carbon" (oscura) — que el
visitante cambia con el botón de la cabecera. Los colores de cada tema viven
en `src/styles/tokens.css`; los componentes nunca usan un color fijo, siempre
una variable como `var(--bg)` o `var(--text)`, así los dos temas se mantienen
sincronizados automáticamente.

## Convención de ramas

- `main` — sólo código que funciona al 100%.
- `feat/…`, `fix/…`, `design/…` — una rama corta por tarea, con su Pull Request
  hacia `main`.

## Deploy

El sitio es estático (`astro build` genera HTML/CSS/JS en `dist/`), así que
sube tal cual a Vercel, Netlify o cualquier hosting estático. Todavía no está
conectado a ningún hosting.
