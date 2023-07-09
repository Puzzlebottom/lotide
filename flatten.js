const flatten = function(inputArray, outputArray = [], index = 0) {
  if (arguments.length < 1) throw new Error('not enough arguments');
  if (arguments.length > 3) throw new Error('too many arguments');
  if (!Array.isArray(inputArray)) throw new Error('invalid argument type');

  if (index >= inputArray.length) return;

  if (Array.isArray(inputArray[index])) {
    flatten(inputArray[index], outputArray, 0);
  } else {
    outputArray.push(inputArray[index]);
  }

  flatten(inputArray, outputArray, index + 1);

  return outputArray;
};

module.exports = { flatten };