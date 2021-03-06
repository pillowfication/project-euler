/**
 * Distinct powers
 *
 * Consider all integer combinations of aᵇ for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:
 *
 *   2² = 4,  2³ = 8,   2⁴ = 16,  2⁵ = 32
 *   3² = 9,  3³ = 27,  3⁴ = 81,  3⁵ = 243
 *   4² = 16, 4³ = 64,  4⁴ = 256, 4⁵ = 1024
 *   5² = 25, 5³ = 125, 5⁴ = 625, 5⁵ = 3125
 *
 * If they are then placed in numerical order, with any repeats removed, we get
 * the following sequence of 15 distinct terms:
 *
 *   4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
 *
 * How many distinct terms are in the sequence generated by aᵇ for 2 ≤ a ≤ 100
 * and 2 ≤ b ≤ 100?
 */

module.exports = () => {
  function gcd (a, b) {
    const rem = a % b
    if (a === b || rem === 0) {
      return b
    }
    return gcd(b, rem)
  }

  // Given a > c, aᵇ = cᵈ -> cᵈ/ᵇ = a
  function isEqual (a, b, c, d) {
    let div = gcd(d, b)
    d /= div
    b /= div

    let brtC
    for (brtC = 1; ; ++brtC) {
      const pow = brtC ** b
      if (pow > c) {
        return false
      }
      if (pow === c) {
        break
      }
    }

    return brtC ** d === a
  }

  function hasReduceable (a, b) {
    for (let c = 2; c < a; ++c) {
      for (let d = b + 1; d <= 100; ++d) {
        if (isEqual(a, b, c, d)) {
          return true
        }
      }
    }
    return false
  }

  let distinctCount = 0

  for (let a = 2; a <= 100; ++a) {
    for (let b = 2; b <= 100; ++b) {
      if (!hasReduceable(a, b)) {
        ++distinctCount
      }
    }
  }

  return distinctCount
}
