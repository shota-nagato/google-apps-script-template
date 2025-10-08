var global = this;
// projects/sample-project/src/sample2.ts
function function2() {
}
"use strict";
(() => {
  // shared/clients/class.ts
  var Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old!`
      );
    }
  };

  // projects/sample-project/src/functions/function2.ts
  function function2() {
    const person = new Person("John", 30);
    person.sayHello();
  }

  // projects/sample-project/src/sample2.ts
  global.function2 = function2;
})();
