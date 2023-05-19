// Given an integer array nums, a reducer function fn, and an intial value init,
// return a reduced array.

// A reduced array is created by applying the following operation: val =
// fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, arr[2]), ... until
// every element in the array has been processed. The final value of val is
// returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

/** Result: runtime 33%, memory 67%
 *
 * NB: best fastest runtime solution is identical
 */
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init
  let accum = init
  for (const num of nums) {
    accum = fn(accum, num)
  }

  return accum
}

describe('q2626. Array Reduce Transformation - Easy', () => {
  it('should return the sum of all numbers', () => {
    expect(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0)).toBe(10)
  })

  it('should return the multiplication of all numbers', () => {
    expect(
      reduce([1, 2, 3, 4], (accum, curr) => accum + curr * curr, 100)
    ).toBe(130)
  })

  it('should return init for empty array', () => {
    expect(reduce([], (accum, curr) => 0, 25)).toBe(25)
  })
})
