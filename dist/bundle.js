var global = this;
// src/index.ts
function run() {
}
"use strict";
(() => {
  // src/sample.ts
  function sample() {
    console.log("---sample---!!!!!");
  }

  // src/index.ts
  global.run = () => {
    sample();
  };
})();
