import { sample } from "./scripts/sample"

declare const global: {
  [key: string]: any;
};

global.sample = sample
