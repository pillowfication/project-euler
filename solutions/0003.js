let num = 600851475143;
let biggestFactor = 1;

while (num > 1) {
  for (let i = 2; i <= num; ++i) {
    if (num % i === 0) {
      biggestFactor = i > biggestFactor ? i : biggestFactor;
      num /= i;
    }
  }
}

module.exports = biggestFactor;
