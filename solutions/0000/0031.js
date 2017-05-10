/**
 * Coin sums
 *
 * In England the currency is made up of pound, £, and pence, p, and there are
 * eight coins in general circulation:
 *
 *   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 *
 * It is possible to make £2 in the following way:
 *
 *   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 *
 * How many different ways can £2 be made using any number of coins?
 */

module.exports = () => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  function countWays(value, maxCoinIndex) {
    if (value === 0 || maxCoinIndex === 0) {
      return 1;
    }

    const coin = coins[maxCoinIndex];
    let numWays = 0;

    for (let coinValue = 0; coinValue <= value; coinValue += coin) {
      numWays += countWays(value - coinValue, maxCoinIndex - 1);
    }

    return numWays;
  }

  return countWays(200, coins.length - 1);
};
