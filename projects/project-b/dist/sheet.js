var global = this;
// projects/project-b/src/sheet.ts
function createSpreadsheet() {
}
function writeToSheet() {
}
"use strict";
(() => {
  // projects/project-b/src/functions/sheet1.ts
  function createSpreadsheet(name) {
    const ss = SpreadsheetApp.create(name);
    console.log(`Spreadsheet created: ${name}`);
    return ss;
  }
  function writeToSheet(sheetId, range, values) {
    const ss = SpreadsheetApp.openById(sheetId);
    const sheet = ss.getActiveSheet();
    sheet.getRange(range).setValues(values);
    console.log(`Data written to range: ${range}`);
  }

  // projects/project-b/src/sheet.ts
  global.createSpreadsheet = createSpreadsheet;
  global.writeToSheet = writeToSheet;
})();
