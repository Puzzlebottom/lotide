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

const isEven = (integer) => {
  return integer % 2 === 0;
};

const middle = (array) => {
  let middle = [];
  let middleIndex = Math.floor(array.length / 2);
  if (isEven(array.length)) {
    middle.push(array[middleIndex - 1]);
  }
  middle.push(array[middleIndex]);
  return middle;
};

