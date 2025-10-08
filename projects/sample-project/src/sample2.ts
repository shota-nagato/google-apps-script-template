import { function2 } from './functions/function2'

declare const global: {
  [key: string]: unknown
}

global.function2 = function2
