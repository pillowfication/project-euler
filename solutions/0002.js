let sum = 0;

for (let [fib1, fib2] = [1, 2]; fib2 < 4000000; [fib1, fib2] = [fib2, fib1 + fib2]) {
  if (fib2 % 2 === 0) {
    sum += fib2;
  }
}

module.exports = sum;
