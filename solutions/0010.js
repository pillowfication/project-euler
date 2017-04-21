const oddPrimes = [];
let sum = 2;

search: for (let next = 3; next < 2000000; next += 2) {
  for (const prime of oddPrimes) {
    if (next % prime === 0) {
      continue search;
    }
  }

  sum += next;
  oddPrimes.push(next);
  console.log(next);
}

module.exports = sum;
