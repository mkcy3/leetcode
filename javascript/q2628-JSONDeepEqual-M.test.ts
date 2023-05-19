// Given two objects o1 and o2, check if they are deeply equal.

// For two objects to be deeply equal, they must contain the same keys, and the
// associated values must also be deeply equal. Two objects are also considered
// deeply equal if they pass the === equality check.

// You may assume both objects are the output of JSON.parse. In other words,
// they are valid JSON.

// Please solve it without using lodash's _.isEqual() function.

/** Results: no runtime difference, no memory difference
 *
 *
 * JSON.stringify(o1).length !== JSON.stringify(o2).length if one array is with integers
 * and the other array is with strings ie. [1,2,3] ["1","2","3"] this operation
 * will return a longer length as it counts the quotes in the string!
 *
 */
function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) return true
  if (
    typeof o1 != 'object' ||
    typeof o2 != 'object' ||
    JSON.stringify(o1).length !== JSON.stringify(o2).length
  )
    return false

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false
  }

  return true
}

describe('q2628. JSON Deep Equal - Medium', () => {
  test('should return true as key value match', () => {
    expect(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true)
  })
  test('should return true even with keys in different order', () => {
    expect(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })).toBe(true)
  })
  test('should return false array numbers is different from strings', () => {
    expect(
      areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ['1', '2', '3'] })
    ).toBe(false)
  })
  test('should return false', () => {
    expect(areDeeplyEqual(true, false)).toBe(false)
  })
  test('should should return true', () => {
    expect(
      areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: [1, 2, 3] })
    ).toBe(true)
  })
  test('should return true if both null', () => {
    expect(areDeeplyEqual(null, null)).toBe(true)
  })
  test('should return true for deeply nested', () => {
    expect(
      areDeeplyEqual(
        { x: { x: { x: { x: { x: 1, y: 2 } } } } },
        { x: { x: { x: { x: { y: 2, x: 1 } } } } }
      )
    ).toBe(true)
  })
  test('should return false for', () => {
    expect(areDeeplyEqual(0, 1)).toBe(false)
  })
})
