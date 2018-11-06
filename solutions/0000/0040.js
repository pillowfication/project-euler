/**
 * An irrational decimal fraction is created by concatenating the positive
 * integers:
 *
 *   0.123456789101112131415161718192021...
 *                ^
 *
 * It can be seen that the 12th digit of the fractional part is 1.
 * If d_n represents the nth digit of the fractional part, find the value of
 * the following expression.
 *
 *   d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000
 */

module.exports = () => {
  function d (n) {
    let chunk
    let index = n - 1

    for (chunk = 1; ; ++chunk) {
      const chunkSize = 9 * (10 ** (chunk - 1)) * chunk
      if (index > chunkSize) {
        index -= chunkSize
      } else {
        break
      }
    }

    const number = Math.floor(index / chunk) + (10 ** (chunk - 1))
    const digit = Number(String(number)[index % chunk])
    return digit
  }

  return d(1) *
    d(10) *
    d(100) *
    d(1000) *
    d(10000) *
    d(100000) *
    d(1000000)
}
