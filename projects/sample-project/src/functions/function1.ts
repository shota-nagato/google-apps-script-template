import { SpreadsheetClient } from '@/shared/clients/spreadsheet'

export function function1(): void {
  const sheet = new SpreadsheetClient(
    '1GPym23wlCJMc6LbVieHKIvbBV3_NlVza6Lpv3N5CSuc',
  )

  const headers = sheet.getHeaders('シート1')
  console.log(headers)

  const index: number = sheet.getColumnIndex('シート1', 'heading1')
  console.log(index.toString())
}
