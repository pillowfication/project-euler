/**
 * Lexicographic permutations
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order.
 * The lexicographic permutations of 0, 1 and 2 are:
 *
 *   012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4,
 * 5, 6, 7, 8 and 9?
 */

module.exports = () => {
  function getPermutations (list) {
    if (list.length === 1) {
      return [ list ]
    }

    const first = list[0]
    const subPermutations = getPermutations(list.slice(1))
    const permutations = []

    for (const subPermutation of subPermutations) {
      for (let i = 0; i < list.length; ++i) {
        const subCopy = subPermutation.slice()
        subCopy.splice(i, 0, first)
        permutations.push(subCopy)
      }
    }

    return permutations
  }

  const permutations = getPermutations([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    .map(permutation => permutation.join(''))
    .sort()

  return permutations[1000000 - 1]
}
