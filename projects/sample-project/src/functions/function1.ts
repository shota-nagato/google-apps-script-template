import { SpreadsheetClient } from '@/shared/clients/spreadsheet'

export function function1(): void {
  const sheet = new SpreadsheetClient('YOUR_SPREADSHEET_ID_HERE')

  const headers = sheet.getHeaders('シート1')
  console.log(headers)

  const index: number = sheet.getColumnIndex('シート1', 'heading1')
  console.log(index.toString())
}
