/**
 * Truncatable primes
 *
 * The number 3797 has an interesting property. Being prime itself, it is
 * possible to continuously remove digits from left to right, and remain prime
 * at each stage: 3797, 797, 97, and 7. Similarly we can work from right to
 * left: 3797, 379, 37, and 3.
 *
 * Find the sum of the only eleven primes that are both truncatable from left
 * to right and right to left.
 *
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

module.exports = () => {
  const primes = { 2: true }
  let lastChecked = 2

  function isPrime (num) {
    if (num <= lastChecked) {
      return primes[num] === true
    }

    let sieve = {}
    const start = lastChecked + 1

    for (const _prime in primes) {
      const prime = Number(_prime)
      for (let index = start - (start % prime || prime) + prime; index <= num; index += prime) {
        sieve[index] = true
      }
    }

    for (let check = start; check <= num; ++check) {
      if (sieve[check] !== true) {
        primes[check] = true
        for (let notPrime = check * 2; notPrime <= num; notPrime += check) {
          sieve[notPrime] = true
        }
      }
    }

    lastChecked = num
    return primes[num] === true
  }

  let sum = 0
  let found = 0

  for (let list = [ 2, 3, 5, 7 ], next = []; found < 11; [ list, next ] = [ next, [] ]) {
    for (const item of list) {
      search: for (let odd = 1; odd <= 9; odd += 2) { // eslint-disable-line no-labels
        const number = item * 10 + odd

        if (isPrime(number)) {
          next.push(number)

          for (let checkLeft = number; checkLeft > 0; checkLeft = Number(String(checkLeft).slice(1))) {
            if (!isPrime(checkLeft)) {
              continue search // eslint-disable-line no-labels
            }
          }

          sum += number
          ++found
        }
      }
    }
  }

  return sum
}
