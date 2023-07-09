const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? '👍 Assertion Passed: ' : '👎 Assertion Failed: ';
  const comparator = isEqual ? ' === ' : ' !== ';

  console.log(`${status}${actual}${comparator}${expected}`);
};

module.exports = { assertEqual };