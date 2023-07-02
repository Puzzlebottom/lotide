const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2, i = 0) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (i === keys1.length && i === keys2.length) {
    return true;
  }

  let key = keys1[i];
  let value1 = obj1[key];
  let value2 = obj2[key];
  let currentState = true;

  if (!value2) return false;

  if (Array.isArray(value1) && Array.isArray(value2)) {
    currentState = currentState && eqArrays(value1, value2, 0);
  } else if (typeof value1 === "object" && typeof value2 === "object") {
    currentState = currentState && eqObjects(value1, value2);
  } else if (value1 !== value2) {
    return false;
  }

  return currentState && eqObjects(obj1, obj2, i + 1);
};


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

const nestedObject1 = {
  key1: {
    keyA: ["A"],
    keyB: "B"
  },
  key2: {
    keyA: "A",
    keyB: "B"
  }
};

const nestedObject2 = {
  key1: {
    keyA: ["A"],
    keyB: "B"
  },
  key2: {
    keyA: "A",
    keyB: "B"
  }
};

const nestedObject3 = {
  key1: [],
  key2: {
    keyA: "A",
    keyB: "B"
  }
};

assertEqual(eqObjects(nestedObject1, nestedObject2), true);
assertEqual(eqObjects(nestedObject1, nestedObject3), false);

module.exports = eqObjects;