import { function1 } from './functions/function1'

declare const global: {
  [key: string]: unknown
}

global.function1 = function1
