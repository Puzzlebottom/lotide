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

const isFunction = (functionToCheck) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

const map = (array, callback) => {
  const invalidArgArray = "map() requires you to provide an array as the first argument";
  const invalidArgFunction = "map() requires that the second argument be a valid function";
  if (!array) return console.log(invalidArgArray);
  if (!Array.isArray(array)) return console.log(invalidArgArray);
  if (!callback) return [...array];
  if (!isFunction(callback)) return console.log(invalidArgFunction);

  let result = [];
  for (let element of array) result.push(callback(element));
  return result;
};

module.export = map;

const captialized = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
let stringArray = ["ground", "control", "to", "major", "tom"];

let upper = (string) => string.toUpperCase();

assertArraysEqual(map(stringArray, upper), captialized);
assertArraysEqual(map([], upper), []);
assertArraysEqual(map(stringArray), ["ground", "control", "to", "major", "tom"]);