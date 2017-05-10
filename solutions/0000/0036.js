/**
 * Double-base palindromes
 *
 * The decimal number, 585 = 1001001001₂ (binary), is palindromic in both
 * bases.
 *
 * Find the sum of all numbers, less than one million, which are palindromic in
 * base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not include
 * leading zeros.)
 */

module.exports = () => {
  function isPalindrome(str) {
    for (let index = 0, length = str.length; index < length / 2; ++index) {
      if (str[index] !== str[length - 1 - index]) {
        return false;
      }
    }

    return true;
  }

  function toBinary(num) {
    let binary = '';
    while (num > 0) {
      binary = String(num & 1) + binary;
      num >>= 1;
    }

    return binary;
  }

  let sum = 0;

  for (let num = 1; num < 1000000; ++num) {
    if (isPalindrome(String(num)) && isPalindrome(toBinary(num))) {
      sum += num;
    }
  }

  return sum;
};
