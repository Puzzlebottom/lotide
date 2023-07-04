const findKeyByValue = function(object, value) {
  if (arguments.length < 2) throw new Error("Not enough arguments! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
  if (arguments.length > 2) throw new Error("Too many arguments! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
  if (typeof object !== "object" || typeof value === "object") throw new Error("Wrong argument types! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");

  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


