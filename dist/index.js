var global = this;
// src/index.ts
function sample() {
}
"use strict";
(() => {
  // src/scripts/sample.ts
  function sample() {
    const message = "sample";
    const numbers = [1, 2, 3];
    const doubled = numbers.map((n) => n * 2);
    console.log(`Message: ${message}, Doubled: ${doubled.join(", ")}`);
  }

  // src/index.ts
  global.sample = sample;
})();
