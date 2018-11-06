/**
 * Reciprocal cycles
 *
 * A unit fraction contains 1 in the numerator. The decimal representation of
 * the unit fractions with denominators 2 to 10 are given:
 *
 *   1/2  = 0.5
 *   1/3  = 0.(3)
 *   1/4  = 0.25
 *   1/5  = 0.2
 *   1/6  = 0.1(6)
 *   1/7  = 0.(142857)
 *   1/8  = 0.125
 *   1/9  = 0.(1)
 *   1/10 = 0.1
 *
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
 * seen that 1/7 has a 6-digit recurring cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring
 * cycle in its decimal fraction part.
 */

module.exports = () => {
  function getCycleLength (denom) {
    const decimal = []

    for (let carryOver = 1; ;) {
      carryOver *= 10
      const nextDigit = Math.floor(carryOver / denom)
      carryOver -= nextDigit * denom

      if (carryOver === 0) {
        return 0
      }

      for (let index = 0; index < decimal.length; ++index) {
        const place = decimal[index]
        if (place.digit === nextDigit && place.carryOver === carryOver) {
          return decimal.length - index
        }
      }

      decimal.push({ digit: nextDigit, carryOver })
    }
  }

  let longestCycle = 0
  let d = 0

  for (let num = 2; num < 1000; ++num) {
    let cycleLength = getCycleLength(num)
    if (cycleLength > longestCycle) {
      longestCycle = cycleLength
      d = num
    }
  }

  return d
}
