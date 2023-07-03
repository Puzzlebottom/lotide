const chai = require('chai');
const assert = chai.assert;

const head = require('../head');

describe('head when passed an invalid input', function() {

  it('should throw an error when passed no input', function() {
    assert.throws(head, "head() requires an array to be passed as an argument");
  });
  it('should throw an error when passed more than one argument', function() {
    assert.throws(() => head([1], [2]), "too many arguments");
  });
  it('should return undefined when passed an empty array', function() {
    const input = [];
    assert.equal(head(input), undefined);
  });
});

describe('head when passed a valid input', function() {
  it('should return the first element of an array', function() {
    const input = [1, 2, 3];
    const expectedOutput = 1;
    assert.equal(head(input), expectedOutput);
  });
});
