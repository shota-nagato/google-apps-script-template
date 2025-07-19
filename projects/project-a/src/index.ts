import { sample } from './functions/sample'

declare const global: {
  [key: string]: unknown
}

global.sample = sample
