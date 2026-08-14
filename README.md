# Runner Burger - estructura base

Sitio web inicial para el restaurante **Runner Burger**. La base está preparada para reemplazar textos, logo, menú, fotografías y datos de contacto cuando estén disponibles.

## Mapa del sitio

- Header: logo provisional y navegación.
- Hero: imagen destacada pendiente, nombre del negocio, mensaje principal y llamadas a la acción.
- Nosotros: historia y presentación del restaurante.
- Menú: categorías de productos.
- Galería: fotografías del lugar, productos y experiencia.
- Promociones: destacados, combos o anuncios.
- Ubicación: dirección, horarios, contacto y mapa.
- Footer: redes sociales, contacto y enlaces importantes.

## Organización de archivos

```text
runnerburgerweb/
  index.html
  css/
    styles.css
  js/
    main.js
  assets/
    logo/
    menu/
    photos/
    icons/
```

## Assets integrados

- Logo: `assets/logo/runner-burger-logo.jpg`
- Menú original: `assets/menu/runner-burger-menu.jpg`
- Fotos: `assets/photos/run.jpg`, `assets/photos/chicken-run.jpg`, `assets/photos/frutti-run.jpg`, `assets/photos/chilli-run.jpg`, `assets/photos/big-run.jpg`, `assets/photos/melt-run.jpg`, `assets/photos/ranch-run.jpg`, `assets/photos/pizza-run.jpg`, `assets/photos/great-run.jpg`

## Reemplazo de contenido

- Logo: reemplaza `assets/logo/runner-burger-logo.jpg` si hay una versión final de mayor calidad.
- Fotos: agrega nuevas imágenes en `assets/photos/` y actualiza la galería en `index.html`.
- Menú: el menú ya está transcrito desde la foto; confirma precios, ortografía y vigencia antes de publicar como definitivo.
- Contacto: reemplaza `[Dirección pendiente]`, `[Horario pendiente]`, teléfono, WhatsApp y redes sociales en `index.html`.
- Paleta: los colores actuales están basados en el rojo del logo; ajusta las variables en `:root` dentro de `css/styles.css` si cambia la identidad visual.
