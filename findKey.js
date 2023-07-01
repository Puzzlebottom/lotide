const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};

const findKey = (object, predicate) => {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let kvPair = object[keys[i]];
    if (predicate(kvPair)) return keys[i];
  }
};

let testObject = { name: "Breakfast", trait: "floppiness", attack: "face-rubs" };
let testObject2 = {
  pizza: { topping: "cheese" },
  sundae: { topping: "chocolate sauce" },
  christmasTree: { topping: "star" }
};

module.exports = findKey;

assertEqual(findKey(testObject, x => x === "Breakfast"), "name");
assertEqual(findKey(testObject2, x => x.topping === "chocolate sauce"), "sundae");
assertEqual(findKey(testObject, x => x === "Vada"), undefined);
assertEqual(findKey({}, x => x === x), undefined);
assertEqual(findKey({}, x => x !== x), undefined);