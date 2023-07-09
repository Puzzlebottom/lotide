const isFunction = function(functionToCheck) {
  if (arguments.length < 1) return;
  if (arguments.length > 1) throw new Error('too many arguments');

  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

module.exports = { isFunction };