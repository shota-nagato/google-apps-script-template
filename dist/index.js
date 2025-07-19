var global = this;
// src/files/index.ts
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

  // src/files/index.ts
  global.sample = sample;
})();
