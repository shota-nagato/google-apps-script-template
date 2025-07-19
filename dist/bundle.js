var global = this;
// src/index.ts
function sample() {
}
"use strict";
(() => {
  // src/scripts/sample.ts
  function sample() {
    console.log("sample");
  }

  // src/index.ts
  global.sample = sample;
})();
