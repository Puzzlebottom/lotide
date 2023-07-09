const head = function(array) {
  if (!array) throw new Error('head() requires an array to be passed as an argument');
  if (arguments.length > 1) throw new Error('too many arguments');
  return array[0];
};

module.exports = { head };