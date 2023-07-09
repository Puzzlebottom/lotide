const { eqObjects } = require('./eqObjects');

const assertObjectsEqual = function(actualObject, expectedObject) {
  const { inspect } = require('util');
  let isEqual = eqObjects(actualObject, expectedObject);
  const status = isEqual ? '👍 Assertion Passed: ' : '👎 Assertion Failed: ';
  const comparator = isEqual ? ' === ' : ' !== ';

  console.log(`${status}[${inspect(actualObject)}]${comparator}[${inspect(expectedObject)}]`);
};

module.exports = { assertObjectsEqual };