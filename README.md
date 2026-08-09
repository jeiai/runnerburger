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

## Reemplazo de contenido

- Logo: guarda el archivo real en `assets/logo/` y cambia el bloque `.brand-logo` por una imagen en `index.html`.
- Fotos: guarda imágenes optimizadas en `assets/photos/` y reemplaza los bloques con clase `image-placeholder`.
- Menú: guarda PDF, imagen o archivo editable en `assets/menu/`; después actualiza las tarjetas de la sección `#menu`.
- Contacto: reemplaza `[Dirección pendiente]`, `[Horario pendiente]`, teléfono, WhatsApp y redes sociales en `index.html`.
- Paleta: cuando llegue el logo, ajusta los colores base en `:root` dentro de `css/styles.css`.
