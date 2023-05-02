// Given an object, return a valid JSON string of that object. You may assume
// the object only inludes strings, integers, arrays, objects, booleans, and
// null. The returned string should not include extra spaces. The order of keys
// should be the same as the order returned by Object.keys().

// Please solve it without using the built-in JSON.stringify method.
type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

function jsonStringify(object: Json): Json {
  if (object === null) {
    return 'null'
  }
  if (typeof object === 'string') {
    return `"${object}"`
  }
  if (typeof object === 'number' || typeof object === 'boolean') {
    return object
  }
  if (Array.isArray(object)) {
    const items = object.map((item) => jsonStringify(item)).join(',')
    return `[${items}]`
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object)
    const items = keys.map((key) => `"${key}":` + jsonStringify(object[key]))
    return `{${items.join(',')}}`
  }
  return null
}

describe('q2633', () => {
  test('should return same order as object.keys()', () => {
    expect(jsonStringify({ y: 1, x: 2 })).toBe(`{"y":1,"x":2}`)
  })
  test('should return primitives as strings, numbers and booleans, and null', () => {
    expect(jsonStringify({ a: 'str', b: -12, c: true, d: null })).toBe(
      `{"a":"str","b":-12,"c":true,"d":null}`
    )
  })
  test('should return objects, arrays can include other objects and arrays', () => {
    expect(jsonStringify({ key: { a: 1, b: [{}, null, 'Hello'] } })).toBe(
      `{"key":{"a":1,"b":[{},null,"Hello"]}}`
    )
  })
  test('should return primitive types', () => {
    expect(jsonStringify(true)).toBe(true)
  })
})
