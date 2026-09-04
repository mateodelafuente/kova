# src/img

**Acá van todas las imágenes del sitio, y nada más que acá** — fotos e
íconos por igual, un solo lugar, sin copias en ningún otro lado. Poné el
archivo acá y avisame el nombre, o pedime que genere uno — yo lo conecto
al componente que corresponda.

La única excepción es `public/favicon.svg`: el ícono de la pestaña del
navegador tiene que vivir en una ruta fija (`/favicon.svg`) por cómo
funciona el propio navegador, así que ese uno se queda en `public/`.

## Cómo se usan

No hace falta subir nada a mano a otra carpeta ni generar copias — Astro
toma el archivo de acá y le da su URL final solo, al buildear.

- **Fotos** (`.jpg`/`.webp`): se importan como cualquier módulo —
  `import foto from '../img/foto.webp'` — y se usan como
  `<img src={foto.src} width={foto.width} height={foto.height}>`.
- **Íconos de una sola forma** (`.png` o `.svg`, dibujo propio o algo que
  bajaste): se usan como **máscara CSS** —
  `mask: url('../img/icono.png') center / contain no-repeat` sobre un
  elemento con `background-color: currentColor`. Así lo que se ve es la
  silueta, pintada con el color del tema — reacciona sola al claro/
  oscuro y al hover, sin importar el color original del archivo.

## Convención de nombres

Nombre corto, en minúsculas, describiendo qué muestra — no hace falta
carpeta por sección mientras sean pocas:

```
hero.webp           → foto grande de la portada (home)
feed.jpg            → producto FEED
flow.jpg            → producto FLOW
play.jpg            → producto PLAY
track.jpg           → producto TRACK
historia.jpg        → retrato / foto de la página de marca
carritoCompras.png  → ícono del carrito en el header
```

Si en algún momento esto crece mucho (muchas fotos por producto, por
ejemplo), lo separamos en subcarpetas (`feed/1.jpg`, `feed/2.jpg`, ...).
Por ahora, mientras es poco, plano es más fácil de navegar.
