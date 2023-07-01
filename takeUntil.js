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

const takeUntil = (array, predicate) => {
  if (array.length === 0) return [];
  let invalidArrayError = "takeUntil() requires its first argument to be an array";
  let invalidPredicateError = "takeUntil() requires its second argument to be a callback which returns a boolean";
  if (!array || !Array.isArray(array)) return console.log(invalidArrayError);
  if (!predicate || !isFunction(predicate)) return console.log(invalidPredicateError);

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) break;
    result.push(array[i]);
  }

  return result;
};

module.exports = takeUntil;

const testArray = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const failAll = x => x !== x;
const failNone = x => x === x;
const failSome = x => x < 0;

assertArraysEqual(takeUntil([], failAll), []);
assertArraysEqual(takeUntil([], failNone), []);
assertArraysEqual(takeUntil(testArray, failAll), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
assertArraysEqual(takeUntil(testArray, failNone), []);
assertArraysEqual(takeUntil(testArray, failSome), [1, 2, 5, 7, 2]);

