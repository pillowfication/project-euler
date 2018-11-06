/**
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

module.exports = () => {
  search: for (let num = 1; ; ++num) { // eslint-disable-line no-labels
    for (let i = 1; i <= 20; ++i) {
      if (num % i !== 0) {
        continue search // eslint-disable-line no-labels
      }
    }

    return num
  }
}
