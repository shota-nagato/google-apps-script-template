var global = this;
// projects/project-a/src/index.ts
function sample() {
}
"use strict";
(() => {
  // projects/project-a/src/functions/sample.ts
  function sample() {
    const message = "sample";
    const numbers = [1, 2, 3];
    const doubled = numbers.map((n) => n * 2);
    console.log(`Message: ${message}, Doubled: ${doubled.join(", ")}`);
  }

  // projects/project-a/src/index.ts
  global.sample = sample;
})();
