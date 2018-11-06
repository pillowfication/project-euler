/**
 * Factorial digit sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 =
 * 27.
 *
 * Find the sum of the digits in the number 100!
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

  function multiplyBy (num, multiplier) {
    const products = []

    multiply: for (let multiExp = 0; multiExp < multiplier.length; ++multiExp) { // eslint-disable-line no-labels
      const multi = multiplier[multiplier.length - 1 - multiExp]
      let product = ''

      for (let exp = 0, carryOver = 0; ; ++exp) {
        let digit = num[num.length - 1 - exp]

        if (!digit) {
          if (carryOver > 0) {
            product = String(carryOver) + product
          }

          product += '0'.repeat(multiExp)
          products.push(product)
          continue multiply // eslint-disable-line no-labels
        }

        const digitProd = Number(digit) * Number(multi) + carryOver
        product = String(digitProd % 10) + product
        carryOver = Math.floor(digitProd / 10)
      }
    }

    let sum = '0'
    for (const num of products) {
      sum = addNumbers(sum, num)
    }

    return sum
  }

  let product = '1'

  for (let num = 1; num <= 100; ++num) {
    product = multiplyBy(product, String(num))
  }

  let digitSum = 0

  for (const digit of product) {
    digitSum += Number(digit)
  }

  return digitSum
}
