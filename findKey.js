const { isFunction } = require('./isFunction');

const findKey = function(object, predicate) {
  if (arguments.length < 2) throw new Error('Not enough arguments! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
  if (arguments.length > 2) throw new Error('Too many arguments! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
  if (typeof object !== 'object' || !isFunction(predicate)) throw new Error('Wrong argument types! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');

  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let kvPair = object[keys[i]];
    if (predicate(kvPair)) return keys[i];
  }
};

module.exports = findKey;