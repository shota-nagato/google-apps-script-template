var global = this;
// src/files/aaa.ts
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
  // src/scripts/aaa1.ts
  function aaa1Function() {
    console.log("This is aaa1 function");
  }
  function calculateSum(a, b) {
    return a + b;
  }

  // src/scripts/aaa2.ts
  function aaa2Function() {
    console.log("This is aaa2 function");
  }
  function formatMessage(message) {
    return `[AAA2] ${message}`;
  }

  // src/files/aaa.ts
  global.aaa1Function = aaa1Function;
  global.calculateSum = calculateSum;
  global.aaa2Function = aaa2Function;
  global.formatMessage = formatMessage;
})();
