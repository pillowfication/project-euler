/**
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

module.exports = () => {
  function isPalindrome(num) {
    let digits = num.toString();

    for (let index = 0; index < digits.length; ++index) {
      if (digits[index] !== digits[digits.length - 1 - index]) {
        return false;
      }
    }

    return true;
  }

  let largestPalindrome = 0;

  for (let x = 100; x <= 999; ++x) {
    for (let y = 100; y <= 999; ++y) {
      const product = x * y;
      if (product > largestPalindrome && isPalindrome(product)) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
};
