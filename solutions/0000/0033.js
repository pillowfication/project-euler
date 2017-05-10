/**
 * Digit cancelling fractions
 *
 * The fraction 49/98 is a curious fraction, as an inexperienced mathematician
 * in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which
 * is correct, is obtained by cancelling the 9s.
 *
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 *
 * There are exactly four non-trivial examples of this type of fraction, less
 * than one in value, and containing two digits in the numerator and
 * denominator.
 *
 * If the product of these four fractions is given in its lowest common terms,
 * find the value of the denominator.
 */

module.exports = () => {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  const foundFracs = [];

  for (let numerator = 10; numerator <= 99; ++numerator) {
    const num = {
      tens: Math.floor(numerator / 10),
      ones: numerator % 10
    };
    if (num.ones === 0) {
      continue;
    }

    const denominators = [];
    for (let digit = 1; digit <= 9; ++digit) {
      denominators.push({tens: digit,    ones: num.tens});
    //denominators.push({tens: digit,    ones: num.ones});
    //denominators.push({tens: num.tens, ones: digit   });
      denominators.push({tens: num.ones, ones: digit   });
    }

    const numVal = num.tens * 10 + num.ones;
    for (const den of denominators) {
      const denVal = den.tens * 10 + den.ones;
      if (denVal <= numVal) {
        continue;
      }

      let reduced =
        num.tens === den.tens ? {num: num.ones, den: den.ones} :
        num.tens === den.ones ? {num: num.ones, den: den.tens} :
        num.ones === den.tens ? {num: num.tens, den: den.ones} :
      /*num.ones === den.ones*/ {num: num.tens, den: den.tens};

      if (numVal * reduced.den === denVal * reduced.num) {
        foundFracs.push(reduced);
      }
    }
  }

  const product = {num: 1, den: 1};
  for (const frac of foundFracs) {
    product.num *= frac.num;
    product.den *= frac.den;
  }

  return product.den / gcd(product.den, product.num);
};
