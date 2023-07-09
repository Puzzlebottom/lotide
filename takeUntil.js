const { isFunction } = require('./isFunction');

const takeUntil = (array, predicate) => {
  if (array.length === 0) return [];
  let invalidArrayError = 'takeUntil() requires its first argument to be an array';
  let invalidPredicateError = 'takeUntil() requires its second argument to be a callback which returns a boolean';
  if (!array || !Array.isArray(array)) return console.log(invalidArrayError);
  if (!predicate || !isFunction(predicate)) return console.log(invalidPredicateError);

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) break;
    result.push(array[i]);
  }

  return result;
};

module.exports = { takeUntil };

