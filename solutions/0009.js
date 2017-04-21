let a, b, c;

search: for (let m = 1; m < 1000; ++m) {
  for (let n = m+1; n < 1000-m; ++n) {
    let o = 1000 - m - n;
    if (o > n && m*m + n*n === o*o) {
      [a, b, c] = [m, n, o];
      break search;
    }
  }
}

module.exports = a * b * c;
