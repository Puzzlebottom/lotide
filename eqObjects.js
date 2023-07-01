const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};

const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  let result = true;

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];

    if (!value2) return false;

    if (Array.isArray(value1) && Array.isArray(value2)) {
      result = eqArrays(value1, value2);
    } else {
      result = value1 === value2;
    }
  }
  return result;
};

module.export = eqObjects;

const cat1 = { name: "Breakfast", attack: "floppiness" };
const cat2 = { name: "Vada", attack: "seismic slam" };
assertEqual(eqObjects(cat1, cat2), false);

const snowflake1 = { composition: "ice crystals", points: 6 };
const snowflake2 = { composition: "ice crystals", points: 6 };
assertEqual(eqObjects(snowflake1, snowflake2), true);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);