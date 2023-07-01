const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actualArray, expectedArray) {
  let isEqual = eqArrays(actualArray, expectedArray);
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}[${actualArray}]${comparator}[${expectedArray}]`);
};



const flatten = (array) => {
  let flatArray = [];
  for (let element of array) {
    flatArray = Array.isArray(element) ? [...flatArray, ...element] : [...flatArray, element];
  }
  return flatArray;
};

module.exports = flatten;

assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
assertArraysEqual(flatten([[1], "more", ["time"]]), [1, "more", "time"]);
assertArraysEqual(flatten([]), []);