var global = this;
// projects/project-a/src/aaa.ts
function aaa1Function() {
}
function calculateSum() {
}
function aaa2Function() {
}
function formatMessage() {
}
"use strict";
(() => {
  // projects/project-a/src/functions/aaa1.ts
  function aaa1Function() {
    console.log("This is aaa1 function!!!!!!!!!!");
  }
  function calculateSum(a, b) {
    return a + b;
  }

  // projects/project-a/src/functions/aaa2.ts
  function aaa2Function() {
    console.log("This is aaa2 function");
  }
  function formatMessage(message) {
    return `[AAA2] ${message}`;
  }

  // projects/project-a/src/aaa.ts
  global.aaa1Function = aaa1Function;
  global.calculateSum = calculateSum;
  global.aaa2Function = aaa2Function;
  global.formatMessage = formatMessage;
})();
