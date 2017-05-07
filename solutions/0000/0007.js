/**
 * 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

module.exports = () => {
  const oddPrimes = [];

  search: for (let next = 3; oddPrimes.length < 10000; next += 2) {
    for (const prime of oddPrimes) {
      if (next % prime === 0) {
        continue search;
      }
    }

    oddPrimes.push(next);
  }

  return oddPrimes[10000 - 1];
};
