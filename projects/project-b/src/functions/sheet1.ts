export function createSpreadsheet(
  name: string,
): GoogleAppsScript.Spreadsheet.Spreadsheet {
  const ss = SpreadsheetApp.create(name)
  console.log(`Spreadsheet created: ${name}`)
  return ss
}

export function writeToSheet(
  sheetId: string,
  range: string,
  values: unknown[][],
): void {
  const ss = SpreadsheetApp.openById(sheetId)
  const sheet = ss.getActiveSheet()
  sheet.getRange(range).setValues(values)
  console.log(`Data written to range: ${range}`)
}
