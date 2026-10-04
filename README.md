# Amín cumple 8 — GitHub Pages

Esta versión NO usa PHP ni servidor propio.

## 1. Crear la planilla

1. Entrá a Google Sheets y creá una planilla llamada `Amín cumple 8`.
2. No hace falta crear columnas manualmente.

## 2. Crear el receptor de respuestas

En la planilla:
**Extensiones → Apps Script**

Borrá el código que aparezca y pegá el contenido de `google-apps-script.js`.

Guardá.

Después:
**Implementar → Nueva implementación**
- Tipo: **Aplicación web**
- Ejecutar como: **Yo**
- Quién tiene acceso: **Cualquier persona**
- Implementar

Copiá la URL que termina en `/exec`.

## 3. Conectar la landing

Abrí `index.html` y buscá:

const GOOGLE_SCRIPT_URL = "";

Pegá entre las comillas la URL de Apps Script.

Ejemplo:

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXX/exec";

Guardá.

## 4. Subir a GitHub

Creá un repositorio nuevo, por ejemplo:

`amin-cumple-8`

Subí:
- `index.html`
- carpeta `assets`
- `assets/fondo-amin-8.png`

También podés subir este README y `google-apps-script.js`, pero no son necesarios para que funcione la web.

## 5. Activar GitHub Pages

En el repositorio:
**Settings → Pages**

En "Build and deployment":
- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`
- Save

GitHub te dará una URL similar a:

https://TU-USUARIO.github.io/amin-cumple-8/

## Resultado

La familia entra a la URL, completa:

Nombre + Apellido

y elige:

SÍ, voy a asistir
o
NO voy a poder

Cada respuesta queda automáticamente en la pestaña `Respuestas` de tu Google Sheet.

## Recomendación

No pongas datos sensibles en la planilla. Para una invitación de cumpleaños, nombre, apellido y asistencia son suficientes.

La landing está preparada para celular, tablet, computadora y pantalla grande.
