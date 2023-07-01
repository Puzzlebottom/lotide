const tail = function(array) {
  if (!array) throw new Error("tail() requires an array to be passed as an argument");
  if (arguments.length > 1) throw new Error("too many arguments");
  if (array.length === 0) return undefined;

  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

module.exports = tail;