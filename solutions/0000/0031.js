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
  const now = Date.now();
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  let countWays = 0;
  let currNodes = [{smallest: 0, value: 0}];

  while (currNodes.length > 0) {
    console.log(currNodes.length)
    let nextNodes = [];

    for (const currNode of currNodes) {
      for (const coin of coins) {
        if (coin >= currNode.smallest) { // Increasing to prevents dupes
          nextNodes.push({smallest: coin, value: currNode.value + coin});
        }
      }
    }

    for (let index = 0; index < nextNodes.length; ++index) {
      const nextNode = nextNodes[index];
      if (nextNode.value === 200) {
        ++countWays;
      }
      if (nextNode.value >= 200) {
        nextNodes.splice(index--, 1);
      }
    }

    currNodes = nextNodes;
  }

  console.log(Date.now() - now);
  return countWays;
};
