/**
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

module.exports = () => {
  let number = 600851475143
  let biggestFactor = 1

  for (let factor = 2; factor <= number; ++factor) {
    while (number % factor === 0) {
      biggestFactor = factor
      number /= factor
    }
  }

  return biggestFactor
}
