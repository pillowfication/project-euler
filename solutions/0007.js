const oddPrimes = [3];

while (oddPrimes.length < 10000) {
  const lastFound = oddPrimes[oddPrimes.length - 1];
  search: for (let next = lastFound + 2;; next += 2) {
    for (const prime of oddPrimes) {
      if (next % prime === 0) {
        continue search;
      }
    }
    oddPrimes.push(next);
    break;
  }
}

module.exports = oddPrimes[oddPrimes.length - 1];
