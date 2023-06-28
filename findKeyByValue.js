const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};

const findKey = (object, value) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

let testObject = {
  sea: "horse",
  cat: "fish",
  dog: "fish",
  lion: "fish",
  parrot: "fish",
  star: null
};

assertEqual(findKey(testObject, "horse"), "sea");
assertEqual(findKey(testObject, "fish"), "cat");
assertEqual(findKey(testObject, null), "star");
assertEqual(findKey(testObject, "monger"), undefined);


