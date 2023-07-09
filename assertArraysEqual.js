const { eqArrays } = require('./eqArrays');

const assertArraysEqual = function(actualArray, expectedArray) {
  let isEqual = eqArrays(actualArray, expectedArray);
  const status = isEqual ? '👍 Assertion Passed: ' : '👎 Assertion Failed: ';
  const comparator = isEqual ? ' === ' : ' !== ';

  console.log(`${status}[${actualArray}]${comparator}[${expectedArray}]`);
};

module.exports = { assertArraysEqual };