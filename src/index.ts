import { sample } from "./sample"

declare const global: {
  [key: string]: any;
};

global.run = () => {
  sample()
}
