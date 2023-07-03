const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail');

describe('tail when it is given invalid input', function() {

  it('should throw an error when passed no input', function() {
    assert.throws(tail, "tail() requires an array to be passed as an argument");
  });
  it('should throw an error when passed more than one argument', function() {
    assert.throws(() => tail([1], [2]), "too many arguments");
  });
  it('should return undefined when passed an empty array', function() {
    const input = [];
    const expectedOutput = undefined;
    assert.equal(tail(input), expectedOutput);
  });
  it('should return an empty array when passed an array with length === 1', function() {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });

});

describe('tail when it is given valid input', () => {
  it('should return an array', function() {
    const input = [1, 2, 3];
    assert.isArray(tail(input));
  });
  it('should return an array containing all elements of the input except the first', function() {
    const input = [1, 2, 3];
    const expectedOutput = [2, 3];
    assert.deepEqual(tail(input), expectedOutput);
  });
});