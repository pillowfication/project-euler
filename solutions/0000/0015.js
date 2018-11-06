/**
 * Lattice paths
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right
 * corner.
 *
 *   https://projecteuler.net/project/images/p015.gif
 *
 * How many such routes are there through a 20×20 grid?
 */

module.exports = () => {
  const grid = [ (new Array(20 + 1)).fill(1) ]

  for (let row = 1; row <= 20; ++row) {
    grid.push([ 1 ])

    for (let col = 1; col <= 20; ++col) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1]
    }
  }

  return grid[20][20]
}
