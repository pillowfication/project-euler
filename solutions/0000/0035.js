/**
 * Circular primes
 *
 * The number, 197, is called a circular prime because all rotations of the
 * digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37,
 * 71, 73, 79, and 97.
 *
 * How many circular primes are there below one million?
 */

module.exports = () => {
  const isNotPrime = []
  const primes = {}

  for (let num = 2; num < 2000000; ++num) {
    if (isNotPrime[num]) {
      continue
    }

    primes[num] = true

    for (let notPrime = num * 2; notPrime < 2000000; notPrime += num) {
      isNotPrime[notPrime] = true
    }
  }

  let countPrimes = 0

  search: for (const prime in primes) { // eslint-disable-line no-labels
    for (let i = 0; i < prime.length; ++i) {
      if (!primes[prime.slice(i) + prime.slice(0, i)]) {
        continue search // eslint-disable-line no-labels
      }
    }
    ++countPrimes
  }

  return countPrimes
}
