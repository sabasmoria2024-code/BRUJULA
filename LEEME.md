# Brújula — proyecto editable

Esta app está hecha con archivos web estándar y se puede editar en Visual Studio Code.

## Abrir el proyecto

1. Instala y abre Visual Studio Code.
2. Selecciona **Archivo → Abrir carpeta…**.
3. Elige la carpeta `brujula`.
4. Abre `index.html` para ver la estructura de la página.

## Qué puedes cambiar

- `index.html`: títulos, textos y tarjetas de la pantalla principal.
- `styles.css`: colores, tipografía, tamaños y distribución.
- `app.js`: contenido de las guías, diagramas, ubicación y brújula.
- `extras.js`: búsqueda de guías, plan de salida guardado en el teléfono y lectura en voz alta.
- `manifest.webmanifest` y `sw.js`: instalación y funcionamiento sin conexión.

La app incluye guías de campo y astronomía básica. La fase lunar del inicio es una aproximación calculada en el dispositivo; para horarios precisos y videos se necesita internet. Los videos externos no se guardan ni se descargan con la app. Brújula no incorpora mapas topográficos offline; ofrece enlaces a Organic Maps (gratuita) y al catálogo oficial SINIT para descargar mapas antes de salir. El plan de salida se guarda solo en el dispositivo; compartir abre WhatsApp para que la persona revise y envíe el mensaje.

Para probar la geolocalización, la brújula y el modo sin conexión, sirve la carpeta desde `localhost` o una web segura (HTTPS). Abrir el archivo directamente puede limitar esas funciones del navegador.

Las guías son informativas. Adapta cualquier consejo a las condiciones y reglas locales.
