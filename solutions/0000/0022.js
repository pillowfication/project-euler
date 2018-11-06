/**
 * Names scores
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
 * containing over five-thousand first names, begin by sorting it into
 * alphabetical order. Then working out the alphabetical value for each name,
 * multiply this value by its alphabetical position in the list to obtain a
 * name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which
 * is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
 * would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

module.exports = () => {
  const fs = require('fs')
  const path = require('path')
  const file = fs.readFileSync(path.resolve(__dirname, '/../../resources/p022_names.txt'))
  let names = String(file).split(',')
    .map(name => name.replace(/[^A-Z]/g, ''))

  names = names.sort()

  function nameScore (name) {
    let score = 0
    for (const char of name) {
      score += char.charCodeAt(0) - 64 // charCode of 'A' = 65
    }
    return score
  }

  let sum = 0

  for (let index = 0; index < names.length; ++index) {
    sum += (index + 1) * nameScore(names[index])
  }

  return sum
}
