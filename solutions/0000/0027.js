/**
 * Quadratic primes
 *
 * Euler discovered the remarkable quadratic formula:
 *
 *   n² + n + 41
 *
 * It turns out that the formula will produce 40 primes for the consecutive
 * integer values 0 ≤ n ≤ 39. However, when n = 40, 40² + 40 + 41 =
 * 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41,
 * 41² + 41 + 41, is clearly divisible by 41.
 *
 * The incredible formula n² − 79n + 1601 was discovered, which produces 80
 * primes for the consecutive values 0 ≤ n ≤ 79. The product of the
 * coefficients, −79 and 1601, is −126479.
 *
 * Considering quadratics of the form:
 *
 *   n² + an + b, where |a| < 1000 and |b| ≤ 1000
 *
 *   where |n| is the modulus/absolute value of n
 *   e.g. |11| = 11 and |−4| = 4
 *
 * Find the product of the coefficients, a and b, for the quadratic expression
 * that produces the maximum number of primes for consecutive values of n,
 * starting with n = 0.
 */

module.exports = () => {
  const generatePrimes = (function * () {
    let oddPrimes = {}

    search: for (let next = 3; ; next += 2) { // eslint-disable-line no-labels
      for (const oddPrime in oddPrimes) {
        if (next % oddPrime === 0) {
          continue search // eslint-disable-line no-labels
        }
      }

      oddPrimes[next] = true
      yield next
    }
  })()

  let oddPrimes = {}
  let last = 0

  function isPrime (num) {
    if (num <= 1) {
      return false
    }
    if (num === 2) {
      return true
    }

    while (last < num) {
      last = generatePrimes.next().value
      oddPrimes[last] = true
    }

    return oddPrimes[num] === true
  }

  let maxConsecutive = 0
  let maxA, maxB

  for (let a = -999; a <= 999; ++a) {
    for (let b = -1000; b <= 1000; ++b) {
      let n = 0
      while (isPrime(n * n + a * n + b)) {
        ++n
      }

      if (n > maxConsecutive) {
        maxConsecutive = n
        ;[ maxA, maxB ] = [ a, b ]
      }
    }
  }

  return maxA * maxB
}
