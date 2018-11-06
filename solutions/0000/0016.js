/**
 * Power digit sum
 *
 * 2¹⁵ = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2¹⁰⁰⁰?
 */

module.exports = () => {
  function multiplyByTwo (num) {
    let product = ''

    for (let exp = 0, carryOver = 0; ; ++exp) {
      let digit = num[num.length - 1 - exp]

      if (!digit) {
        if (carryOver > 0) {
          product = String(carryOver) + product
        }
        return product
      }

      const digitProd = Number(digit) * 2 + carryOver
      product = String(digitProd % 10) + product
      carryOver = Math.floor(digitProd / 10)
    }
  }

  let power = '1'
  for (let exp = 0; exp < 1000; ++exp) {
    power = multiplyByTwo(power)
  }

  let sumOfDigits = 0
  for (const digit of power) {
    sumOfDigits += Number(digit)
  }

  return sumOfDigits
}
