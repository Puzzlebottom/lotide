const assertArraysEqual = require("./assertArraysEqual");

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