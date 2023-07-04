const countOnly = function(allItems, itemsToCount) {
  if (arguments.length < 2) throw new Error("Not enough arguments! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
  if (arguments.length > 2) throw new Error("Too many arguments! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
  if (!Array.isArray(allItems) || typeof itemsToCount !== "object") throw new Error("Wrong argument types! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");

  let result = {};
  const keys = Object.keys(itemsToCount);
  for (let item of allItems) {
    if (keys.includes(item) && itemsToCount[item]) {
      result[item] = result[item] ? result[item] += 1 : 1;
    }
  }
  return result;
};

module.exports = countOnly;