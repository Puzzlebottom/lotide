const isEven = (integer) => {
  return integer % 2 === 0;
};

const middle = function(array) {
  if (!array) throw new Error('middle() requires an array to be passed as an argument');
  if (arguments.length > 1) throw new Error('too many arguments');
  if (array.length === 0) return undefined;

  let middle = [];
  if (array.length < 3) return middle;

  let middleIndex = Math.floor(array.length / 2);
  if (isEven(array.length)) {
    middle.push(array[middleIndex - 1]);

  }
  middle.push(array[middleIndex]);
  return middle;
};

module.exports = { middle };
