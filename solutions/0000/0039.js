/**
 * Integer right triangles
 *
 * If p is the perimeter of a right angle triangle with integral length sides,
 * {a, b, c}, there are exactly three solutions for p = 120.
 *
 *   {20, 48, 52}, {24, 45, 51}, {30, 40, 50}
 *
 * For which value of p ≤ 1000, is the number of solutions maximised?
 */

module.exports = () => {
  function countSolutions(p) {
    let count = 0;

    for (let a = 1; a <= p / 3; ++a) {
      for (let b = a; b <= (p - a) / 2; ++b) {
        const c = p - a - b;
        if (a ** 2 + b ** 2 === c ** 2) {
          ++count;
        }
      }
    }

    return count;
  }

  let maxSolutions = 0;
  let maxP = 0;

  for (let p = 3; p <= 1000; ++p) {
    let numSolutions = countSolutions(p);
    if (numSolutions > maxSolutions) {
      maxSolutions = numSolutions;
      maxP = p;
    }
  }

  return maxP;
};
