let sum = 0;
let [fib1, fib2] = [1, 2];

while (fib2 < 4000000) {
  if (fib2 % 2 === 0) {
    sum += fib2;
  }
  [fib1, fib2] = [fib2, fib1 + fib2];
}

module.exports = sum;
