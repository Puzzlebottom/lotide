const assertEqual = require("./assertEqual");
// const eqObjects = require("./eqObjects");

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


const eqArrays = (arr1, arr2, i = 0) => {
  if (i === arr1.length && i === arr2.length) {
    return true;
  }

  let element1 = arr1[i];
  let element2 = arr2[i];
  let currentState = true;

  if (Array.isArray(element1) && Array.isArray(element2)) {
    currentState = currentState && eqArrays(element1, element2, 0);
  } else if (typeof element1 === "object" && typeof element2 === "object") {
    currentState = currentState && eqObjects(element1, element2);
  } else if (element1 !== element2) {
    return false;
  }

  return currentState && eqArrays(arr1, arr2, i + 1);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([[2, 3], {}], [[2, 3], {}]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

module.exports = eqArrays;