/**
 * Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 * which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
 * each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 * 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 * 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

module.exports = () => {
  const dCache = {};
  function d(n) {
    if (dCache[n]) {
      return dCache[n];
    }

    const sqrt = Math.sqrt(n);
    let sum = 0;

    for (let i = 1; i < sqrt; ++i) {
      if (n % i === 0) {
        sum += i;
        sum += n / i;
      }
    }

    if (Math.floor(sqrt) === sqrt) {
      sum += sqrt;
    }

    sum -= n; // less than n
    dCache[n] = sum;
    return sum;
  }

  let sum = 0;

  for (let num = 1; num < 10000; ++num) {
    if (num !== d(num) && num === d(d(num))) {
      sum += num;
    }
  }

  return sum;
};
