// Given an integer array arr and a mapping function fn, return a new array with
// a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i],
// i).

// Please solve it without the built-in Array.map method.

/** Result: runtime same, memory 98%
 *
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i)
  }

  return arr
}

describe('q2635', () => {
  it('should increase all values by one', () => {
    const arr = [1, 2, 3]
    const fn = (n: number) => {
      return n + 1
    }
    expect(map(arr, fn)).toStrictEqual([2, 3, 4])
  })

  it('should increase all values by index it resides in', () => {
    const arr = [1, 2, 3]
    const fn = (n: number, i: number) => {
      return n + i
    }
    expect(map(arr, fn)).toStrictEqual([1, 3, 5])
  })

  it('should return 42 for every index', () => {
    const arr = [10, 20, 30]
    const fn = (n: number) => {
      return 42
    }
    expect(map(arr, fn)).toStrictEqual([42, 42, 42])
  })
})
