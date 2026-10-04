const SHEET_NAME = "Respuestas";

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Fecha", "Nombre", "Apellido", "Asistencia"]);
  }

  const p = e.parameter || {};
  const nombre = String(p.nombre || "").trim();
  const apellido = String(p.apellido || "").trim();
  const asistencia = String(p.asistencia || "").trim().toUpperCase();

  if (!nombre || !apellido || !["SI", "NO"].includes(asistencia)) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false, error:"Datos incompletos"}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    nombre,
    apellido,
    asistencia
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
