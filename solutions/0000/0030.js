/**
 * Digit fifth powers
 *
 * Surprisingly there are only three numbers that can be written as the sum of
 * fourth powers of their digits:
 *
 *   1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴
 *   8208 = 8⁴ + 2⁴ + 0⁴ + 8⁴
 *   9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴
 *
 * As 1 = 1⁴ is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of fifth
 * powers of their digits.
 */

module.exports = () => {
  let maxValue = 9
  for (let length = 1; ; ++length) {
    const digitValue = (9 ** 5) * length
    if (digitValue < maxValue) {
      break
    }
    maxValue = 10 * maxValue + 9
  }

  let sum = 0

  for (let num = 2; num <= maxValue; ++num) {
    let digitSum = 0
    for (const digit of String(num)) {
      digitSum += Number(digit) ** 5
    }

    if (digitSum === num) {
      sum += num
    }
  }

  return sum
}
