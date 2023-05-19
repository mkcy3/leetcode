// Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.

// Snail traversal order starts at the top left cell with the first value of the current array. It then moves through the entire first column from top to bottom, followed by moving to the next column on the right and traversing it from bottom to top. This pattern continues, alternating the direction of traversal with each column, until the entire current array is covered. For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below. Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array.
/** Results: runtime 20%, memory 30%
 *  faster solutions exist with must less readability
 */

interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][]
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) return []

  let newArr = new Array(rowsCount)
    .fill([])
    .map((_) => new Array(colsCount).fill(0))

  for (let i = 0; i < this.length; i++) {
    let j = Math.floor(i / rowsCount)
    if (j % 2 === 0) {
      newArr[i % rowsCount][j] = this[i]
    } else {
      newArr[rowsCount - (i % rowsCount) - 1][j] = this[i]
    }
  }

  return newArr
}

describe('q2624. Snail Traversal - Medium', () => {
  test('should return a 2d array', () => {
    const nums = [
      19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
    ]

    expect(nums.snail(5, 4)).toStrictEqual([
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ])
  })
  test('should return 4 column 2d array', () => {
    const nums = [1, 2, 3, 4]
    expect(nums.snail(1, 4)).toStrictEqual([[1, 2, 3, 4]])
  })
  test('should be invalid return empty array', () => {
    const nums = [1, 3]
    expect(nums.snail(2, 2)).toStrictEqual([])
  })
})
