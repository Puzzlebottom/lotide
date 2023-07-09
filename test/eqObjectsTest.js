const { assert } = require('chai');
const { eqObjects } = require('../eqObjects');

describe('eqObjects when it is given invalid input', function() {
  it('should throw an error when passed less than two arguments', function() {
    assert.throws(eqObjects, 'eqObjects() requires a pair of objects to be passed as arguments');
  });
  it('should throw an error when passed more than three arguments', function() {
    assert.throws(() => eqObjects([1], [2], [3], [4]), 'too many arguments');
  });
  it('should throw an error when the third argument is NaN', () => {
    assert.throws(() => eqObjects([1], [2], 'string'), 'the 3rd argument of eqObjects() is used for its recursive case only');
  });
});

describe('eqObjects when it is given valid input', function() {
  it('should return false if the objects are not deeply equal', function() {
    const obj1 = { 'a': '1', 'b': [1, 2], 'c': { 'a': '2' } };
    const obj2 = { 'a': '1', 'b': [3, 4], 'c': { 'a': 2 } };
    const expectedResult = eqObjects(obj1, obj2);
    assert.equal(expectedResult, false);

  });
  it('should return true if the objects are deeply equal', function() {
    const obj1 = { 'a': '1', 'b': [1, 2], 'c': { 'a': '2' } };
    const obj2 = { 'a': '1', 'b': [1, 2], 'c': { 'a': '2' } };
    const expectedResult = eqObjects(obj1, obj2);
    assert.equal(expectedResult, true);

  });
});