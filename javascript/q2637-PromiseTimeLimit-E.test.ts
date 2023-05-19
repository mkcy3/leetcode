// Given an asyncronous function fn and a time t in milliseconds, return a new
// time limited version of the input function.
// A time limited function is a function that is identical to the original
// unless it takes longer than t milliseconds to fullfill. In that case, it will
// reject with "Time Limit Exceeded".  Note that it should reject with a string,
// not an Error.

type FnPromise = (...params: any[]) => Promise<any>

function timeLimit(fn: FnPromise, t: number): FnPromise {
  return async function (...args) {
    const fns = fn(...args)

    const p = new Promise((res, rej) => {
      setTimeout(() => {
        rej('Time Limit Exceeded')
      }, t)
    })

    return Promise.race([fns, p])
  }
}

describe('q2637. Promise Time Limit - Easy', () => {
  it.fails('should fail and return Time Limit Exceeded', async () => {
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100))
      return n * n
    }

    const limited = timeLimit(fn, 50)
    expect(await limited(5)).toBe('Time Limit Exceeded')
  })
  it('should resolve to 25', async () => {
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100))
      return n * n
    }

    const limited = timeLimit(fn, 150)
    expect(await limited(5)).toBe(25)
  })
  it('should resolve to 15', async () => {
    const fn = async (a: number, b: number) => {
      await new Promise((res) => setTimeout(res, 120))
      return a + b
    }
    const limited = timeLimit(fn, 150)
    expect(await limited(5, 10)).toBe(15)
  })

  it.fails('should throw error', async () => {
    const fn = async () => {
      throw 'Error'
    }
    const limited = timeLimit(fn, 1000)
    expect(await limited()).toThrow(Error)
  })
})
