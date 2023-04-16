//Given an integer n, return a counter function. This counter function initially
//returns n and then returns 1 more than the previous value every subsequent
//time it is called (n, n + 1, n + 2, etc).

/** Results: runtime 81%, memory 90.9%
 *
 *  const createCounter = (n: number) => () => n++;
 *
 */
function createCounter(n: number): () => number {
  return function () {
    return n++
  }
}

it('q2620', () => {
  const counter = createCounter(10)
  expect(counter()).toBe(10)
  expect(counter()).toBe(11)
  expect(counter()).toBe(12)
  expect(counter()).toBe(13)
})
