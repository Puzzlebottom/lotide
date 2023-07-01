const assertEqual = require("./assertEqual");

const findKey = (object, predicate) => {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let kvPair = object[keys[i]];
    if (predicate(kvPair)) return keys[i];
  }
};

module.exports = findKey;

// let testObject = { name: "Breakfast", trait: "floppiness", attack: "face-rubs" };
// let testObject2 = {
//   pizza: { topping: "cheese" },
//   sundae: { topping: "chocolate sauce" },
//   christmasTree: { topping: "star" }
// };


// assertEqual(findKey(testObject, x => x === "Breakfast"), "name");
// assertEqual(findKey(testObject2, x => x.topping === "chocolate sauce"), "sundae");
// assertEqual(findKey(testObject, x => x === "Vada"), undefined);
// assertEqual(findKey({}, x => x === x), undefined);
// assertEqual(findKey({}, x => x !== x), undefined);