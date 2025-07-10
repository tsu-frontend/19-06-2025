class Test {
  constructor() {
    this.test = "test";
  }
}

let testing;

let randNum = Math.random();

if (randNum > 0.5) {
  testing = new Test();
}

console.log(testing.test);
