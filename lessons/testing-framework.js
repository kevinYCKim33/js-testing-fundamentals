const {sum, subtract} = require("../math")

// you are executing test right now!!
// the callback is the () => {}
// if during it, something screws up, it'll go to the catch part of the test

// wrapping expect inside a callback allows you to continue testing other even when a test fails
test("sum adds numbers", () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}
