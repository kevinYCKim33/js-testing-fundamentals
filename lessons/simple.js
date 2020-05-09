const { sum, subtract } = require("../math");

let result, expected;

// testing in JS is not that crazy! it's just does it throw an error when you expect something different!

result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
