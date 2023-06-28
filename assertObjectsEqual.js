const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

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

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actualObject, expectedObject);
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}[${inspect(actualObject)}]${comparator}[${inspect(expectedObject)}]`);
};

const snowflake1 = { composition: "ice crystals", points: 6 };
const snowflake2 = { composition: "ice crystals", points: 6 };
const cat1 = { name: "Breakfast", attack: "floppiness"};
const cat2 = { name: "Vada", attack: "seismic slam"};

assertObjectsEqual(snowflake1, snowflake2); // => true
assertObjectsEqual({}, {}); // => true
assertObjectsEqual(cat1, cat2); // => false