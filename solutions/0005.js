let smallest;

search:for (let num = 1; smallest === undefined; ++num) {
  for (let i = 1; i <= 20; ++i) {
    if (num % i !== 0) {
      continue search;
    }
  }
  smallest = num;
}

module.exports = smallest;
