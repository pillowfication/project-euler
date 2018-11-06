/**
 * 1000-digit Fibonacci number
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 *
 *   F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.
 *
 * Hence the first 12 terms will be:
 *
 *   F1 = 1
 *   F2 = 1
 *   F3 = 2
 *   F4 = 3
 *   F5 = 5
 *   F6 = 8
 *   F7 = 13
 *   F8 = 21
 *   F9 = 34
 *   F10 = 55
 *   F11 = 89
 *   F12 = 144
 *
 * The 12th term, F12, is the first term to contain three digits.
 *
 * What is the index of the first term in the Fibonacci sequence to contain
 * 1000 digits?
 */

module.exports = () => {
  function addNumbers (a, b) {
    let sum = ''

    for (let exp = 0, carryOver = 0; ; ++exp) {
      let aDigit = a[a.length - 1 - exp]
      let bDigit = b[b.length - 1 - exp]

      if (!aDigit && !bDigit) {
        if (carryOver > 0) {
          sum = String(carryOver) + sum
        }
        return sum
      }

      const digitSum = (Number(aDigit) || 0) + (Number(bDigit) || 0) + carryOver
      sum = String(digitSum % 10) + sum
      carryOver = Math.floor(digitSum / 10)
    }
  }

  let index
  let [ fibPrev, fibCurr ] = [ '1', '1' ]

  for (index = 2; fibCurr.length < 1000; ++index) {
    [ fibPrev, fibCurr ] = [ fibCurr, addNumbers(fibPrev, fibCurr) ]
  }

  return index
}
