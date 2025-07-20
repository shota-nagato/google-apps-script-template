import { function2 } from './functions/function2'

declare const global: {
  [key: string]: unknown
}

global.function1 = function2
