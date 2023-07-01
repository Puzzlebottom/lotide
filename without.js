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

const without = (source, itemsToRemove) => {
  if (!source.length) return [];
  if (!itemsToRemove.length) return [...source];

  let arrayWithout = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrayWithout.push(element);
    }
  }
  return arrayWithout;
};

module.exports = without;

const words = ["abecedarian", "brobdingnagian", "cassandraic"];
const wordsWithout = without(words, ["brobdingnagian"]);
const numbersWithout = without([1, 2, 3], [3]);
const numberStringsWithout = without(["1", "2", "3"], [1, 2, "3"]);
const emptySource = without([], ["deconstructivism"]);
const emptyItemsToRemove = without(["elephantiasis"], []);

assertArraysEqual(wordsWithout, ["abecedarian", "cassandraic"]);
assertArraysEqual(words, ["abecedarian", "brobdingnagian", "cassandraic"]);
assertArraysEqual(numbersWithout, [1, 2]);
assertArraysEqual(numberStringsWithout, ["1", "2"]);
assertArraysEqual(emptySource, []);
assertArraysEqual(emptyItemsToRemove, ["elephantiasis"]);