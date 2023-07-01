const assertArraysEqual = require("./assertArraysEqual");

const isEven = (integer) => {
  return integer % 2 === 0;
};

const middle = (array) => {
  let middle = [];
  if (array.length < 3) return middle;

  let middleIndex = Math.floor(array.length / 2);
  if (isEven(array.length)) {
    middle.push(array[middleIndex - 1]);

  }
  middle.push(array[middleIndex]);
  return middle;
};

module.exports = middle;

// let even = [1, 2, 3, 4];
// let odd = [1, 2, 3];
// let short = [1, 2];
// let shorter = [1];
// let empty = [];

// assertArraysEqual(middle(even), [2, 3]);
// assertArraysEqual(middle(odd), [2]);
// assertArraysEqual(middle(short), []);
// assertArraysEqual(middle(shorter), []);
// assertArraysEqual(middle(empty), []);