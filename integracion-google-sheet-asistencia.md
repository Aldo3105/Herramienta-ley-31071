# Servidor privado para el formulario de asistencia

El formulario publico no debe mostrar ni guardar datos de funcionarios en la pagina. La opcion mas simple y gratuita es usar Google Apps Script como servidor privado conectado a una hoja de calculo de tu cuenta.

Mientras `assistanceEndpoint` este vacio en `app.js`, los datos no se envian a ningun lugar.

## 1. Crear la hoja privada

Usa esta hoja o crea una nueva:

https://docs.google.com/spreadsheets/d/1oTEStAnbTAOVkOCb5ZhWTUqWG4bKXxrlpL2zAmk06UY/edit?usp=sharing

Recomendacion: deja la hoja como privada o compartida solo contigo y con quienes daran asistencia tecnica.

## 2. Crear el Apps Script

En la hoja, entra a **Extensiones > Apps Script** y pega este codigo:

```javascript
const SHEET_NAME = "Solicitudes";
const FIELDS = [
  "fecha",
  "nombre",
  "cargo",
  "municipalidad",
  "territorio",
  "correo",
  "telefono",
  "fase",
  "necesidad",
];

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(FIELDS);
  }

  return sheet;
}

function doGet() {
  return ContentService
    .createTextOutput("Servidor de asistencia Ley 31071 activo.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const sheet = getSheet_();
  const data = e.parameter || {};
  sheet.appendRow(FIELDS.map((field) => data[field] || ""));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Publicar como aplicacion web

En Apps Script:

1. Haz clic en **Implementar > Nueva implementacion**.
2. En tipo, elige **Aplicacion web**.
3. En **Ejecutar como**, selecciona **Yo**.
4. En **Quien tiene acceso**, selecciona **Cualquier persona con el enlace**.
5. Haz clic en **Implementar** y autoriza los permisos.
6. Copia la URL que termina en `/exec`.

## 4. Probar el servidor

Abre la URL `/exec` en el navegador. Debe mostrar:

```text
Servidor de asistencia Ley 31071 activo.
```

Si no carga, revisa que la implementacion sea de tipo **Aplicacion web** y que estes usando la URL `/exec`, no la URL del editor de Apps Script.

## 5. Conectar la pagina

En `app.js`, cambia:

```javascript
const assistanceEndpoint = "";
```

por:

```javascript
const assistanceEndpoint = "PEGA_AQUI_TU_URL_/exec";
```

Desde ese momento, el formulario publico enviara cada solicitud a la hoja privada. Los visitantes no veran la hoja ni los registros.
