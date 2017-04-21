const oddPrimes = [];

search: for (let next = 3; oddPrimes.length < 10000; next += 2) {
  for (const prime of oddPrimes) {
    if (next % prime === 0) {
      continue search;
    }
  }

  oddPrimes.push(next);
}

module.exports = oddPrimes[10000 - 1];
