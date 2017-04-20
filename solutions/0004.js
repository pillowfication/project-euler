let largestPalindrome = 0;

function isPalindrome(num) {
  return String(num).split('').reverse().join('') === String(num);
}

for (let x = 100; x <= 999; ++x) {
  for (let y = 100; y <= 999; ++y) {
    if (isPalindrome(x*y)) {
      largestPalindrome = Math.max(largestPalindrome, x*y);
    }
  }
}

module.exports = largestPalindrome;
