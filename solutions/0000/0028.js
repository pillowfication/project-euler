/**
 * Number spiral diagonals
 *
 * Starting with the number 1 and moving to the right in a clockwise direction
 * a 5 by 5 spiral is formed as follows:
 *
 *   21 22 23 24 25
 *   20  7  8  9 10
 *   19  6  1  2 11
 *   18  5  4  3 12
 *   17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral
 * formed in the same way?
 */

module.exports = () => {
  const grid = []
  for (let row = 0; row < 1001; ++row) {
    grid[row] = []
  }

  let row = (1001 - 1) / 2
  let col = (1001 - 1) / 2
  let number = 1

  // Initialize center
  grid[row][col] = number
  --row
  ++col

  for (let length = 2; length <= 1001 - 1; length += 2) {
    // Down
    for (let i = 0; i < length; ++i) {
      ++row
      grid[row][col] = ++number
    }
    // Left
    for (let i = 0; i < length; ++i) {
      --col
      grid[row][col] = ++number
    }
    // Up
    for (let i = 0; i < length; ++i) {
      --row
      grid[row][col] = ++number
    }
    // Right
    for (let i = 0; i < length; ++i) {
      ++col
      grid[row][col] = ++number
    }

    --row
    ++col
  }

  let sum = 0
  for (let i = 0; i < 1001; ++i) {
    sum += grid[i][i]
    sum += grid[i][1001 - 1 - i]
  }
  sum -= grid[(1001 - 1) / 2][(1001 - 1) / 2]

  return sum
}
