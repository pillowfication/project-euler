/**
 * Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

module.exports = () => {
  const isNotPrime = [];
  let sum = 0;

  for (let num = 2; num < 2000000; ++num) {
    if (isNotPrime[num]) {
      continue;
    }

    sum += num;

    for (let notPrime = num * 2; notPrime < 2000000; notPrime += num) {
      isNotPrime[notPrime] = true;
    }
  }

  return sum;
};
