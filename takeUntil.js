const { isFunction } = require('./isFunction');

const takeUntil = function(array, predicate) {
  if (arguments.length < 2) throw new Error('not enough arguments');
  if (arguments.length > 2) throw new Error('too many arguments');
  if (!Array.isArray(array) || !isFunction(predicate)) throw new Error('invalid argument type');

  let result = [];
  if (array.length === 0) return [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) break;
    result.push(array[i]);
  }

  return result;
};

module.exports = { takeUntil };

