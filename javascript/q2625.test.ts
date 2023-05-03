// Given a multi-dimensional array arr and a depth n, return a flattened version
// of that array.

// A multi-dimensional array is a recursive data structure that contains
// integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the
// sub-arrays removed and replaced with the actual elements in that sub-array.
// This flattening operation should only be done if the current depth of nesting
// is less than n. The depth of the elements in the first array are considered
// to be 0.

// Please solve it without the built-in Array.flat method.

/** Result: 39% runtime, 5% memory
 *
 * Using index for loop actually produces TS error requiring ugly TS as fix
 * for each and element passing with does not produce error requiring as ...
 *arr.forEach(el => {
        if (typeof el === 'number') {
            result.push(el);
        } else {
            result.push(...flat(el, n - 1));
        }
    })
 */
type MultiDimensionalArray = (number | MultiDimensionalArray)[]

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0 || typeof arr === 'number') return arr
  let flatten: MultiDimensionalArray = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const tsArr = arr[i] as MultiDimensionalArray
      flatten.push(...flat(tsArr, n - 1))
    } else {
      flatten.push(arr[i])
    }
  }

  return flatten
}

describe('q2625', () => {
  test('should return original array with n = 0', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    expect(flat(arr, 0)).toStrictEqual([
      1,
      2,
      3,
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ])
  })
  test('should flatten once with n = 1', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    expect(flat(arr, 1)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      [9, 10, 11],
      12,
      13,
      14,
      15,
    ])
  })
  test('should return flattened array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ]
    expect(flat(arr, 2)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ])
  })
})
