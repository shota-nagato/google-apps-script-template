import { sample } from "./functions/sample"

declare const global: {
  [key: string]: any;
};

global.sample = sample
