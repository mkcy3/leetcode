// Write code that enhances all arrays such that you can call the array.last()
// method on any array and it will return the last element. If there are no
// elements in the array, it should return -1.

/** Result: runtime 74%, memory 25%
 *
 *
 */

interface Array<T> {
  last(): T | -1
}

Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1]
  }

  return -1
}

it('q2619', () => {
  let arr = [1, 2, 3]
  expect(arr.last()).toBe(3)
  arr = []
  expect(arr.last()).toBe(-1)
})
