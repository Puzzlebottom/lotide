const chai = require('chai');
const assert = chai.assert;

const middle = require('../middle');

describe('middle when it is given invalid arguments', function() {
  it('should throw an error when passed no input', function() {
    assert.throws(middle, "middle() requires an array to be passed as an argument");
  });
  it('should throw an error when passed more than one argument', function() {
    assert.throws(() => middle([1], [2]), "too many arguments");
  });
});

describe('middle when it is given valid arguments', function() {
  it('should return undefined when passed an empty array', function() {
    const input = [];
    const expectedOutput = undefined;
    assert.equal(middle(input), expectedOutput);
  });
  it('should return an empty array when passed an array with length === 1', function() {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('should return an empty array when passed an array with length === 2', function() {
    const input = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('should return an array of length 1 when passed an array containing an odd number of elements', function() {
    const input = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('should return an array of length 2 when passed an array containing an even number of elements', function() {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('should return an array containing the correct element(s)', function() {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(input), expectedOutput);
  });
});