const { assert } = require("chai");
const countOnly = require("../countOnly");

describe("countOnly when it receives invalid input", function() {
  it('throws an error if it receives less than two arguments', function() {
    assert.throw(() => countOnly(), "Not enough arguments! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
  });
  it('throws an error if it receives more than 2 arguments', function() {
    assert.throw(() => countOnly([], {}, "string"), "Too many arguments! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
  });
  it('throws an error if its arguments are of the wrong type', function() {
    assert.throw(() => countOnly("string", {}), "Wrong argument types! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
    assert.throw(() => countOnly([], "string"), "Wrong argument types! countOnly() requires 2 arguments: an array of items, and an object whose keys will be counted");
  });
});

describe("countOnly when it receives valid input", function() {
  it('returns an object', function() {
    assert.isObject(countOnly([], {}));
  });
  it('counts keys with a value of true', function() {
    const inputArray = ["Breakfast"];
    const inputObject = { Breakfast: true };
    assert.equal(countOnly(inputArray, inputObject)["Breakfast"], 1);
  });
  it('does not count keys with a value of false', function() {
    const inputArray = ["Vada"];
    const inputObject = { Vada: false };
    assert.equal(countOnly(inputArray, inputObject)["Vada"], undefined);
  });
  it('returns the correct values', function() {
    const inputArray = ["Breakfast", "Vada", "Vada"];
    const inputObject = { Breakfast: true, Vada: true };
    assert.equal(countOnly(inputArray, inputObject)["Breakfast"], 1);
    assert.equal(countOnly(inputArray, inputObject)["Vada"], 2);
  });
});
