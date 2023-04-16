// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn
// that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity
// function f(x) = x.

// You may assume each function in the array accepts one integer as input and
// returns one integer as output.

/** RESULT:
 *  NB. intentially not using reduceRight
 *  return (val) => functions.reduceRight((val, fn) => fn(val), val)
 */
type F = (x: number) => number

function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) {
      return x
    } else {
      let accum = x
      for (let i = functions.length - 1; i >= 0; i--) {
        accum = functions[i](accum)
      }
      return accum
    }
  }
}

describe('q2629', () => {
  it('should return 65', () => {
    const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])
    expect(fn(4)).toBe(65)
  })
  it('should return 1000', () => {
    const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])
    expect(fn(1)).toBe(1000)
  })

  it('should identy function', () => {
    const fn = compose([])
    expect(fn(42)).toBe(42)
  })
})
