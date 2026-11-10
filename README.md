# Ctrl Z Colectivo Creativo — Portafolio interactivo

## Estructura
- `index.html` — 9 diapositivas (textos fijos editables directamente).
- `js/content.js` — **contactos, métricas, equipo, servicios, proyectos y casos**. Aquí se edita casi todo.
- `css/styles.css` — variables de color y tipografía en `:root`.
- `img/` — logo (`logo.png`), fotos y portadas. `video/` — videos comprimidos (MP4 H.264).

## Qué completar (marcado como "pendiente" en la página)
1. `CONTACT`: ya tiene WhatsApp, Instagram y Behance. Correo, web y LinkedIn: si los llenas, aparecen; vacíos no se muestran.
2. `TEAM`: ya tiene a Fernando y Olly.
3. `METRICS`: solo cifras reales. Vacío = la sección numérica no aparece. Con datos, se animan al entrar a la diapositiva 07.
4. `ITEMS`: cada pieza de la galería (imagen o video). Para agregar una: copia el archivo a `img/` o `video/` y añade una línea. `conceptual:true` muestra la etiqueta «Proyecto conceptual». El texto solo aparece al ampliar.
5. `CASES`: completa resultados y añade imágenes antes/después.
6. Motion y Edición de video: añade ejemplos en `SERVICES[].img` o videos en `img/` (`<video controls>`).

## Reemplazar recursos
- Imagen: sustituye el archivo en `img/` con el mismo nombre, o cambia la ruta en `content.js`. Mantén el `alt`.
- Texto: edita `index.html` o `content.js`.

## Vista local
Abre `index.html` en el navegador (requiere internet para Google Fonts). Navegación: flechas del teclado, botones, deslizar en móvil, menú superior.

## Publicar gratis
- **Netlify:** app.netlify.com/drop → arrastra la carpeta.
- **Cloudflare Pages:** Workers & Pages → Create → Pages → Upload assets → sube la carpeta (sin build).
Para revisión privada usa la URL temporal de la plataforma (o protección con contraseña si tu plan la ofrece); la página incluye `noindex`. Quita esa etiqueta al publicar la versión final.
# ctrlzcolectivocreativo
