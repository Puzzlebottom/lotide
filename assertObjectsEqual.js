const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actualObject, expectedObject);
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}[${inspect(actualObject)}]${comparator}[${inspect(expectedObject)}]`);
};

module.exports = assertObjectsEqual;

const snowflake1 = { composition: "ice crystals", points: 6 };
const snowflake2 = { composition: "ice crystals", points: 6 };
const cat1 = { name: "Breakfast", attack: "floppiness" };
const cat2 = { name: "Vada", attack: "seismic slam" };

assertObjectsEqual(snowflake1, snowflake2); // => true
assertObjectsEqual({}, {}); // => true
assertObjectsEqual(cat1, cat2); // => false