# src/img

Acá van **todas** las imágenes reales del sitio (fotos de producto, hero,
historia, etc.). Poné el archivo acá y avisame el nombre — yo la conecto
al componente que corresponda.

Quedan afuera de esta carpeta los `.svg` que son parte del *diseño* en vez
de fotografía (favicon, íconos) — esos siguen en `public/` / `src/components/Icon.astro`.

## Cómo se usan

Al vivir dentro de `src/`, Astro las optimiza solo: las comprime, genera
el tamaño justo para cada pantalla y evita que una foto pesada frene la
carga de la página. Por eso no van directo en `public/`.

## Convención de nombres

Nombre corto, en minúsculas, describiendo qué muestra — no hace falta
carpeta por sección mientras sean pocas:

```
hero.jpg          → foto grande de la portada (home)
feed.jpg          → producto FEED
flow.jpg          → producto FLOW
play.jpg          → producto PLAY
track.jpg         → producto TRACK
historia.jpg      → retrato / foto de la página de marca
```

Si en algún momento esto crece mucho (muchas fotos por producto, por
ejemplo), lo separamos en subcarpetas (`feed/1.jpg`, `feed/2.jpg`, ...).
Por ahora, mientras es poco, plano es más fácil de navegar.
