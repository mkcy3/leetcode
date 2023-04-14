/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

function isPalindrome(s: string): boolean {

  const converted = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
  const reverse = converted.split("").reverse().join("")

  if (converted === reverse) {
    return true
  }

  return false
}




test('q125', () => {

expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
expect(isPalindrome("race a car")).toBe(false)
expect(isPalindrome(" ")).toBe(true)
expect(isPalindrome("ab_a")).toBe(true)

})