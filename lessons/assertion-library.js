const {sum, subtract} = require("../math")

let result, expected

result = sum(3, 7)
expected = 10
// problem...if this line fails, the assertion-library stops running!
// you'll never see what other tests have failed or passed!
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

// nice closure here...it's been awhile Kyle Simpson
// beautiful closure
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  }
}
