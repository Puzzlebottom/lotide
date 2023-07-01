const assertArraysEqual = require("./assertArraysEqual");

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

// const words = ["abecedarian", "brobdingnagian", "cassandraic"];
// const wordsWithout = without(words, ["brobdingnagian"]);
// const numbersWithout = without([1, 2, 3], [3]);
// const numberStringsWithout = without(["1", "2", "3"], [1, 2, "3"]);
// const emptySource = without([], ["deconstructivism"]);
// const emptyItemsToRemove = without(["elephantiasis"], []);

// assertArraysEqual(wordsWithout, ["abecedarian", "cassandraic"]);
// assertArraysEqual(words, ["abecedarian", "brobdingnagian", "cassandraic"]);
// assertArraysEqual(numbersWithout, [1, 2]);
// assertArraysEqual(numberStringsWithout, ["1", "2"]);
// assertArraysEqual(emptySource, []);
// assertArraysEqual(emptyItemsToRemove, ["elephantiasis"]);