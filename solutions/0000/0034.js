/**
 * Digit factorials
 *
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of
 * their digits.
 *
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 */

module.exports = () => {
  function _factorial(n) {
    let product = 1;
    for (let i = 2; i <= n; ++i) {
      product *= i;
    }
    return product;
  }
  const factorial = {};
  for (let i = 0; i <= 9; ++i) {
    factorial[i] = _factorial(i);
  }

  let maxValue = 9;
  for (let length = 1; ; ++length) {
    const digitValue = factorial[9] * length;
    if (digitValue < maxValue) {
      break;
    }
    maxValue = 10 * maxValue + 9;
  }

  let sum = 0;

  for (let num = 3; num <= maxValue; ++num) {
    let digitValue = 0;
    for (const digit of String(num)) {
      digitValue += factorial[digit];
    }

    if (digitValue === num) {
      sum += num;
    }
  }

  return sum;
};
