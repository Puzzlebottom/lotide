const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const XOR = (a, b) => (a || b) && !(a && b);

const eqObjects = (object1, object2) => {
  // primative case short circuit;
  if (typeof object1 !== "object" || typeof object2 !== "object") return object1 === object2;

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];

    //undefined value case
    if (value1 === undefined) throw new Error("Cannot compare objects containing values of undefined");

    //missing key case
    if (!value2) return false;

    //only one array case;
    if (XOR(Array.isArray(value1), Array.isArray(value2))) return false;

    //two array case
    if (Array.isArray(value1) && Array.isArray(value2) && !eqArrays(value1, value2)) return false;

    //recursive case
    if (!eqObjects(value1, value2)) return false;

  }
  return true;
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