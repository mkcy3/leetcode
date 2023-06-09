//Given a positive integer millis, write an asyncronous function that sleeps for
//millis milliseconds. It can resolve any value.
import { bench } from 'vitest'

/** Result: runtime 57%, memory 29%
 *
 *
 *
 */
async function sleep(millis: number): Promise<void> {
  new Promise((resolve) => setTimeout(resolve, millis))
}

describe('q2621. Sleep - Easy', () => {
  bench(
    'should delay by 100ms',
    () => {
      sleep(100)
    },
    { time: 100 }
  )

  bench(
    'should delay by 200ms',
    () => {
      sleep(200)
    },
    { time: 200 }
  )
})
