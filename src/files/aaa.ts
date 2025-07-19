import { aaa1Function, calculateSum } from "../scripts/aaa1";
import { aaa2Function, formatMessage } from "../scripts/aaa2";

declare const global: {
  [key: string]: any;
};

global.aaa1Function = aaa1Function;
global.calculateSum = calculateSum;
global.aaa2Function = aaa2Function;
global.formatMessage = formatMessage;
