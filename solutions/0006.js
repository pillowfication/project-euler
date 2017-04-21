// \sum_{i=1}^n{i^3} = \left(\sum_{i=1}^n{i}\right)^2

let difference = 0;
for (let i = 1; i <= 100; ++i) {
  difference += i**2 * (i-1);
}

module.exports = difference;
