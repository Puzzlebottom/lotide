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
  } else if (typeof value1 === 'object' && typeof value2 === 'object') {
    currentState = currentState && eqObjects(value1, value2);
  } else if (value1 !== value2) {
    return false;
  }

  return currentState && eqObjects(obj1, obj2, i + 1);
};


const eqArrays = function(arr1, arr2, i = 0) {

  if (!arr1 || !arr2) throw new Error('eqArrays() requires a pair of arrays to be passed as arguments');
  if (arguments.length > 3) throw new Error('too many arguments');
  if (arguments[2] && isNaN(arguments[2])) throw new Error('the 3rd argument of eqArray() is used for its recursive case only');

  if (i === arr1.length && i === arr2.length) {
    return true;
  }

  let element1 = arr1[i];
  let element2 = arr2[i];
  let currentState = true;

  if (Array.isArray(element1) && Array.isArray(element2)) {
    currentState = currentState && eqArrays(element1, element2, 0);
  } else if (typeof element1 === 'object' && typeof element2 === 'object') {
    currentState = currentState && eqObjects(element1, element2);
  } else if (element1 !== element2) {
    return false;
  }

  return currentState && eqArrays(arr1, arr2, i + 1);
};

module.exports = { eqArrays };