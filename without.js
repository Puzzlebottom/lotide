const without = function(source, itemsToRemove) {
  if (arguments.length < 2) throw new Error('not enough arguments');
  if (arguments.length > 2) throw new Error('too many arguments');
  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) throw new Error('invalid argument type');

  if (!source.length) return [];
  if (!itemsToRemove.length) return [...source];

  let arrayWithout = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrayWithout.push(element);
    }
  }
  return arrayWithout;
};

module.exports = { without };