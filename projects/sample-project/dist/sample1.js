var global = this;
// projects/sample-project/src/sample1.ts
function function1() {
}
"use strict";
(() => {
  // shared/clients/spreadsheet.ts
  var SpreadsheetClient = class {
    /**
     * @constructor
     * @param {string} [id]
     */
    constructor(id) {
      this.spreadsheet = SpreadsheetApp.openById(id);
      if (!this.spreadsheet) throw new Error("Spreadsheet\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002");
    }
    /**
     * @param {string} name
     * @returns {GoogleAppsScript.Spreadsheet.Sheet}
     */
    getSheetByName(name) {
      const sheet = this.spreadsheet.getSheetByName(name);
      if (!sheet) throw new Error(`\u30B7\u30FC\u30C8 ${name} \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002`);
      return sheet;
    }
    getHeaders(sheetName) {
      const sheet = this.getSheetByName(sheetName);
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      return headers;
    }
    getColumnIndex(sheetName, columnName) {
      const headers = this.getHeaders(sheetName);
      const index = headers.indexOf(columnName);
      if (index === -1) {
        throw new Error(
          `\u30B7\u30FC\u30C8 ${sheetName} \u306B\u5217 ${columnName} \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002`
        );
      }
      return index;
    }
  };

  // projects/sample-project/src/functions/function1.ts
  function function1() {
    const sheet = new SpreadsheetClient(
      "1GPym23wlCJMc6LbVieHKIvbBV3_NlVza6Lpv3N5CSuc"
    );
    const headers = sheet.getHeaders("\u30B7\u30FC\u30C81");
    console.log(headers);
    const index = sheet.getColumnIndex("\u30B7\u30FC\u30C81", "heading1");
    console.log(index.toString());
  }

  // projects/sample-project/src/sample1.ts
  global.function1 = function1;
})();
