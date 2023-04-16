// Given an integer array arr and a filtering function fn, return a new array
// with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i) evaluated
// to a truthy value.
// Please solve it without the built-in Array.filter method.

/** Result: no difference from best.
 *
 */
function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const newArr: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

describe('q2634', () => {
  it('should filter out values not greater than 10', () => {
    const arr = [0, 10, 20, 30]
    const fn = (n: number) => {
      return n > 10
    }
    expect(filter(arr, fn)).toStrictEqual([20, 30])
  })

  it('should remove all elements not at index 0', () => {
    const arr = [1, 2, 3]
    const fn = (n: number, i: number) => {
      return i === 0
    }
    expect(filter(arr, fn)).toStrictEqual([1])
  })

  it('should filter falsey values', () => {
    const arr = [-2, -1, 0, 1, 2]
    const fn = (n: number) => {
      return n + 1
    }
    expect(filter(arr, fn)).toStrictEqual([-2, 0, 1, 2])
  })
})
