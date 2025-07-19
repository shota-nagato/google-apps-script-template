var global = this;
// projects/project-a/src/bbb.ts
function bbb1Function() {
}
function processData() {
}
function bbb2Function() {
}
function validateInput() {
}
"use strict";
(() => {
  // projects/project-a/src/functions/bbb1.ts
  function bbb1Function() {
    console.log("This is bbb1 function");
  }
  function processData(data) {
    return data.map((item) => ({ ...item, processed: true }));
  }

  // projects/project-a/src/functions/bbb2.ts
  function bbb2Function() {
    console.log("This is bbb2 function");
  }
  function validateInput(input) {
    return input.length > 0 && input.trim() !== "";
  }

  // projects/project-a/src/bbb.ts
  global.bbb1Function = bbb1Function;
  global.processData = processData;
  global.bbb2Function = bbb2Function;
  global.validateInput = validateInput;
})();
