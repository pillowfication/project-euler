/**
 * Pandigital products
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1
 * through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
 * multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity
 * can be written as a 1 through 9 pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only
 * include it once in your sum.
 */

module.exports = () => {
  function getPermutations(list) {
    if (list.length === 1) {
      return [list];
    }

    const first = list[0];
    const subPermutations = getPermutations(list.slice(1));
    const permutations = [];

    for (const subPermutation of subPermutations) {
      for (let i = 0; i < list.length; ++i) {
        const subCopy = subPermutation.slice();
        subCopy.splice(i, 0, first);
        permutations.push(subCopy);
      }
    }

    return permutations;
  }

  const permutations = getPermutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const foundProducts = {};
  let sum = 0;

  for (const permutation of permutations) {
    for (let timesIndex = 1; timesIndex <= 7; ++timesIndex) {
      for (let equalsIndex = timesIndex + 1; equalsIndex <= 8; ++equalsIndex) {
        const multiplicand = Number(permutation.slice(0, timesIndex).join(''));
        const multiplier = Number(permutation.slice(timesIndex, equalsIndex).join(''));
        const product = Number(permutation.slice(equalsIndex).join(''));

        if (!foundProducts[product] && multiplicand * multiplier === product) {
          foundProducts[product] = true;
          sum += product;
        }
      }
    }
  }

  return sum;
};
