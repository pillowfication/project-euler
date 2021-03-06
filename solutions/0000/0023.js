/**
 * Non-abundant sums
 *
 * A perfect number is a number for which the sum of its proper divisors is
 * exactly equal to the number. For example, the sum of the proper divisors of
 * 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
 * number.
 *
 * A number n is called deficient if the sum of its proper divisors is less
 * than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
 * number that can be written as the sum of two abundant numbers is 24. By
 * mathematical analysis, it can be shown that all integers greater than 28123
 * can be written as the sum of two abundant numbers. However, this upper limit
 * cannot be reduced any further by analysis even though it is known that the
 * greatest number that cannot be expressed as the sum of two abundant numbers
 * is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum
 * of two abundant numbers.
 */

module.exports = () => {
  function _isAbundant (num) {
    const sqrt = Math.sqrt(num)
    let sum = 1

    for (let i = 2; i < sqrt; ++i) {
      if (num % i === 0) {
        sum += i
        sum += num / i
      }
      if (sum > num) {
        return true
      }
    }

    if (Math.floor(sqrt) === sqrt) {
      sum += sqrt
    }

    return sum > num
  }

  const isAbundantCache = { 1: false }
  function isAbundant (num) {
    if (isAbundantCache[num] !== undefined) {
      return isAbundantCache[num]
    }
    const abundant = _isAbundant(num)
    isAbundantCache[num] = abundant
    return abundant
  }

  let sum = 0

  search: for (let num = 1; num <= 28123; ++num) { // eslint-disable-line no-labels
    for (let a = 1; a <= num / 2; ++a) {
      const b = num - a
      if (isAbundant(a) && isAbundant(b)) {
        continue search // eslint-disable-line no-labels
      }
    }
    sum += num
  }

  return sum
}
