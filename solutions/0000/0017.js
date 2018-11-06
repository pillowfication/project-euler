/**
 * Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
 * letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

module.exports = () => {
  const onesNames = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  const tensNames = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }
  const teensNames = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen'
  }

  function getName (number) {
    const ones = number % 10
    const tens = Math.floor(number / 10) % 10
    const hundreds = Math.floor(number / 100)

    let name

    if (ones === 0 && tens > 0) {
      name = tensNames[tens]
    } else if (ones > 0 && tens === 0) {
      name = onesNames[ones]
    } else if (tens === 1) {
      name = teensNames[ones]
    } else if (tens > 1) {
      name = `${tensNames[tens]}-${onesNames[ones]}`
    }

    if (!name && hundreds > 0) {
      name = `${onesNames[hundreds]} hundred`
    } else if (hundreds > 0) {
      name = `${onesNames[hundreds]} hundred and ${name}`
    }

    return name
  }

  let letterCount = 0

  for (let num = 1; num <= 999; ++num) {
    const name = getName(num)
    const letters = name.replace(/[^a-z]/g, '')
    letterCount += letters.length
  }

  letterCount += 'one thousand'.replace(/[^a-z]/g, '').length

  return letterCount
}
