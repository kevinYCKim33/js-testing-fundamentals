const {sumAsync, subtractAsync} = require("../math")

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    // no await here for an async function, tests will give off a false pass!
    // the test callback itself is async, so you have to await for the callback in general
    // JS is complicated!
    await callback() // magic await line that doesn't throw unhandled promise rejection error!
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
