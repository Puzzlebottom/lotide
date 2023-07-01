const assertEqual = require("./assertEqual");

const findKeyByValue = (object, value) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// let testObject = {
//   sea: "horse",
//   cat: "fish",
//   dog: "fish",
//   lion: "fish",
//   parrot: "fish",
//   star: null
// };

// assertEqual(findKeyByValue(testObject, "horse"), "sea");
// assertEqual(findKeyByValue(testObject, "fish"), "cat");
// assertEqual(findKeyByValue(testObject, null), "star");
// assertEqual(findKeyByValue(testObject, "monger"), undefined);


