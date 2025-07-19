import { aaa1Function, calculateSum } from './functions/aaa1'
import { aaa2Function, formatMessage } from './functions/aaa2'

declare const global: {
  [key: string]: unknown
}

// AAA関連の関数をglobalに公開
global.aaa1Function = aaa1Function
global.calculateSum = calculateSum
global.aaa2Function = aaa2Function
global.formatMessage = formatMessage
