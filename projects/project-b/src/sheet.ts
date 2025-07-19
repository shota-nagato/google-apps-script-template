import { createSpreadsheet, writeToSheet } from './functions/sheet1'

declare const global: {
  [key: string]: unknown
}

// Sheet関連の関数をglobalに公開
global.createSpreadsheet = createSpreadsheet
global.writeToSheet = writeToSheet
