/**
 * Maximum path sum II
 *
 * By starting at the top of the triangle below and moving to adjacent numbers
 * on the row below, the maximum total from top to bottom is 23.
 *
 *      3
 *     7 4
 *    2 4 6
 *   8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom in triangle.txt (right click and
 * 'Save Link/Target As...'), a 15K text file containing a triangle with
 * one-hundred rows.
 *
 * NOTE: This is a much more difficult version of Problem 18. It is not
 * possible to try every route to solve this problem, as there are 2⁹⁹
 * altogether! If you could check one trillion (10¹²) routes every second it
 * would take over twenty billion years to check them all. There is an
 * efficient algorithm to solve it. ;o)
 */


module.exports = () => {
  const fs = require('fs');
  const file = fs.readFileSync(__dirname + '/../resources/p067_triangle.txt');
  const triangle = String(file).split('\n')
    .map(line => line.split(' ').map(Number));
  triangle.pop(); // trailing \n

  for (let row = 1; row < triangle.length; ++row) {
    for (let col = 0; col < triangle[row].length; ++col) {
      const left = triangle[row - 1][col - 1] || 0;
      const right = triangle[row - 1][col] || 0;
      triangle[row][col] += Math.max(left, right);
    }
  }

  const lastRow = triangle[triangle.length - 1];
  return Math.max(...lastRow);
};
