/**
 * Given two strings needle and haystack
 * return the index of the first occurrence of needle in haystack
 * or -1 if needle is not part of haystack.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * NB: can "cheat" using return indexOf(needle)
 *
 * Results:
 * runtime: 29%, memory: 53%
 *
 */

function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0
  for (let i = 0, j = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(j)) {
      j++
    } else {
      i -= j
      j = 0
    }

    if (j === needle.length) {
      return i - j + 1
    }
  }

  return -1
}

it('q28', () => {
  expect(strStr('sadbutsad', 'sad')).toBe(0)
  expect(strStr('leetcode', 'leeto')).toBe(-1)
  expect(strStr('aaba', 'b')).toBe(2)

  expect(strStr('mississippi', 'issip')).toBe(4)
})
