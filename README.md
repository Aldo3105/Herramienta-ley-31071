# Ruta Ley N° 31071

Sitio estático para compartir una guía interactiva con funcionarios de municipalidades.

## Qué incluye

- Ruta por fases con detalle al hacer clic.
- Fase previa de fortalecimiento de capacidades e incidencia institucional.
- Biblioteca pública de documentos del Drive con filtros por modelos, casos, guías, normativa, herramientas y difusión.
- Asistente documental basado en palabras clave para entregar modelos, enlaces y orientación por proceso.
- Simulador didáctico `Juego31071/juego.html` donde un funcionario municipal practica la implementación real de la Ley N° 31071: encargo de alcaldía, expediente, COMPRAGRO, PAC, requerimiento, convocatoria, pago y reporte.
- Sin backend, sin cuenta de ChatGPT y sin costo de operación.

## Publicación gratuita recomendada

La opción más simple, sin configurar repositorio, es Netlify Drop:

1. Entrar a `https://app.netlify.com/drop`.
2. Subir la carpeta con `index.html`, `styles.css`, `app.js` y `README.md`.
3. Compartir la URL pública generada.

Para mantener versiones y hacer mejoras continuas, recomiendo GitHub Pages:

1. Crear un repositorio público.
2. Subir `index.html`, `styles.css`, `app.js` y `README.md`.
3. Activar Pages desde `Settings > Pages > Deploy from branch`.
4. Compartir la URL pública con las municipalidades.

También puede insertarse como enlace dentro de un Google Site institucional.

## Futuras mejoras

- Reemplazar el asistente por un chatbot con IA cuando exista presupuesto.
- Agregar más modelos editables al Drive y registrarlos en `app.js`.
- Añadir descarga directa de documentos en Word/PDF si se consolidan versiones finales.

## Mantenimiento de documentos

Cada documento de la biblioteca está registrado en `app.js`, dentro de `resources`.
Para agregar un nuevo archivo del Drive, copia su enlace público, crea un nuevo objeto con
`title`, `type`, `tag`, `category`, `description`, `url` y `keywords`, y vuelve a publicar el sitio.
