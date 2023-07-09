const { isFunction } = require('./isFunction');

const map = function(array, callback) {
  if (arguments.length < 1) throw new Error('not enough arguments');
  if (arguments.length > 2) throw new Error('too many arguments');
  if (!Array.isArray(array) || callback && !isFunction(callback)) throw new Error('invalid argument type');

  if (!callback) return [...array];

  let result = [];
  for (let element of array) result.push(callback(element));
  return result;
};

module.exports = { map };