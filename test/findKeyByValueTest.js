const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");

describe('findKeyByValue when it is given invalid inputs', function() {
  it('should throw an error if it receives the wrong number of arguments', function() {
    assert.throw(() => findKeyByValue({}), "Not enough arguments! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
    assert.throw(() => findKeyByValue({}, "X", 4), "Too many arguments! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
  });

  it('should throw an error if it receives arguments of the wrong type', function() {
    assert.throw(() => findKeyByValue("X", "Y"), "Wrong argument types! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
    assert.throw(() => findKeyByValue({}, []), "Wrong argument types! findKeyByValue requires 2 arguments: an object and a primative value to search the object for");
  });
});

describe('findKeyByValue when it is given valid inputs', function() {
  it('should return a string if it finds a key with the correct value', function() {
    assert.isString(findKeyByValue({ x: "y" }, "y"));
  });
  it('should return undefined if it does not find a key with the correct value', function() {
    assert.isUndefined(findKeyByValue({ x: "y" }, "z"));
  });
  it('should return the first key that has the correct value', function() {
    assert.equal(findKeyByValue({ x: "y", z: "y" }, "y"), "x");
  });
});