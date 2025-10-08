/**
 * @class SpreadsheetClient
 * @description Google Spreadsheetを操作するための汎用クラス
 */
export class SpreadsheetClient {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet

  /**
   * @constructor
   * @param {string} [id]
   */
  constructor(id: string) {
    try {
      this.spreadsheet = SpreadsheetApp.openById(id)
    } catch {
      throw new Error('Spreadsheetが見つかりません。')
    }
  }

  /**
   * @param {string} name
   * @returns {GoogleAppsScript.Spreadsheet.Sheet}
   */
  getSheetByName(name: string): GoogleAppsScript.Spreadsheet.Sheet {
    const sheet = this.spreadsheet.getSheetByName(name)
    if (!sheet) throw new Error(`シート ${name} が見つかりません。`)

    return sheet
  }

  /**
   * @param {string} sheetName
   * @returns {string[]}
   */
  getHeaders(sheetName: string): string[] {
    const sheet = this.getSheetByName(sheetName)

    const headers = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0]

    return headers
  }

  /**
   * @param {string} sheetName
   * @param {string} columnName
   * @returns {number}
   */
  getColumnIndex(sheetName: string, columnName: string): number {
    const headers = this.getHeaders(sheetName)
    const index = headers.indexOf(columnName)

    if (index === -1) {
      throw new Error(
        `シート ${sheetName} に列 ${columnName} が見つかりません。`,
      )
    }

    return index
  }
}
