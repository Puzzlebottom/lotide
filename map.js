const { isFunction } = require('./isFunction');

const map = (array, callback) => {
  const invalidArgArray = 'map() requires you to provide an array as the first argument';
  const invalidArgFunction = 'map() requires that the second argument be a valid function';
  if (!array) return console.log(invalidArgArray);
  if (!Array.isArray(array)) return console.log(invalidArgArray);
  if (!callback) return [...array];
  if (!isFunction(callback)) return console.log(invalidArgFunction);

  let result = [];
  for (let element of array) result.push(callback(element));
  return result;
};

module.exports = { map };