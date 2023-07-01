const assertArraysEqual = require("./assertArraysEqual");
const isFunction = require("./isFunction");

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

// const testArray = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const failAll = x => x !== x;
// const failNone = x => x === x;
// const failSome = x => x < 0;

// assertArraysEqual(takeUntil([], failAll), []);
// assertArraysEqual(takeUntil([], failNone), []);
// assertArraysEqual(takeUntil(testArray, failAll), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
// assertArraysEqual(takeUntil(testArray, failNone), []);
// assertArraysEqual(takeUntil(testArray, failSome), [1, 2, 5, 7, 2]);

