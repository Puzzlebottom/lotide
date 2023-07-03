const { assert } = require("chai");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

describe('eqArrays when it is given invalid input', function() {
  it('should throw an error when passed less than two arguments', function() {
    assert.throws(eqArrays, "eqArrays() requires a pair of arrays to be passed as arguments");
  });
  it('should throw an error when passed more than three arguments', function() {
    assert.throws(() => eqArrays([1], [2], [3], [4]), "too many arguments");
  });
  it('should throw an error when the third argument is NaN', () => {
    assert.throws(() => eqArrays([1], [2], "string"), "the 3rd argument of eqArray() is used for its recursive case only");
  });
});

describe('eqArrays when it is given valid input', function() {
  it('should return false when given two unequal arrays', () => {
    const array = [1, 2];
    const unequalArray = [1, "string"];
    assert.equal(eqArrays(array, unequalArray), false);
  });
  it('should return false if only one argument is an array', () => {
    const array = [1, 2];
    const string = "string";
    assert.equal(eqArrays(array, string), false);
  });
  it('should return true if given two equal arrays', () => {
    const array = [1, 2];
    const equalArray = [1, 2];
    assert.equal(eqArrays(array, equalArray), true);
  });
  it('should evaluate nested arrays properly', () => {
    const nestedArray = [1, [2, 3]];
    const equalNestedArray = [1, [2, 3]];
    const unequalNestedArray = [[1, 2], 3];
    assert.equal(eqArrays(nestedArray, equalNestedArray), true);
    assert.equal(eqArrays(nestedArray, unequalNestedArray), false);
  });
});