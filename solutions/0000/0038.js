/**
 * Pandigital multiples
 *
 * Take the number 192 and multiply it by each of 1, 2, and 3:
 *
 *   192 × 1 = 192
 *   192 × 2 = 384
 *   192 × 3 = 576
 *
 * By concatenating each product we get the 1 to 9 pandigital, 192384576. We
 * will call 192384576 the concatenated product of 192 and (1, 2, 3)
 *
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4,
 * and 5, giving the pandigital, 918273645, which is the concatenated product
 * of 9 and (1, 2, 3, 4, 5).
 *
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as
 * the concatenated product of an integer with (1, 2, ..., n) where n > 1?
 */

module.exports = () => {
  function isPandigitalizable(integer) {
    let pandigital = integer;

    for (let n = 2; pandigital < 10 ** 8; ++n) {
      const next = integer * n;
      pandigital = Number(String(pandigital) + String(next));
    }

    if (pandigital > 987654321) {
      return false;
    }

    pandigital = String(pandigital);
    for (var i = 1; i <= 9; ++i) {
      if (!pandigital.includes(i)) {
        return false;
      }
    }

    return Number(pandigital);
  }

  let largestPandigital = 0;

  for (let num = 1; num < 10 ** 5; ++num) {
    let pandigital = isPandigitalizable(num);
    if (pandigital && pandigital > largestPandigital) {
      largestPandigital = pandigital;
    }
  }

  return largestPandigital;
};
