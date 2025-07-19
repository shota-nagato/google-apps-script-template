import { bbb1Function, processData } from "../scripts/bbb1";
import { bbb2Function, validateInput } from "../scripts/bbb2";

declare const global: {
  [key: string]: any;
};

// BBB関連の関数をglobalに公開
global.bbb1Function = bbb1Function;
global.processData = processData;
global.bbb2Function = bbb2Function;
global.validateInput = validateInput; 