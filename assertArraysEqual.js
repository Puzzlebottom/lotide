const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actualArray, expectedArray) {
  let isEqual = eqArrays(actualArray, expectedArray);
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}[${actualArray}]${comparator}[${expectedArray}]`);
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([], []); // => true
// assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => false
// assertArraysEqual([1, 2, 3], [4, 5, 6]); // => false