var global = this;
// projects/sample-project/src/sample1.ts
function function1() {
}
"use strict";
(() => {
  // projects/sample-project/src/functions/function1.ts
  function function1() {
    console.log("function1");
  }

  // projects/sample-project/src/sample1.ts
  global.function1 = function1;
})();
