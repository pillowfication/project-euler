/**
 * Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 *   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not
 * exceed four million, find the sum of the even-valued terms.
 */

module.exports = () => {
  let sum = 0
  let [ fibPrev, fibCurr ] = [ 1, 2 ]

  while (fibCurr < 4000000) {
    if (fibCurr % 2 === 0) {
      sum += fibCurr
    }
    [ fibPrev, fibCurr ] = [ fibCurr, fibPrev + fibCurr ]
  }

  return sum
}
