const { assert } = require('chai');
const { letterPositions } = require('../letterPositions');

describe('letterPositions when it receives invalid arguments', () => {
  it('should throw an error if it receives the wrong number of arguments', () => {
    assert.throw(() => letterPositions(), 'not enough arguments');
    assert.throw(() => letterPositions('string', 'string'), 'too many arguments');
  });
  it('should throw an error if it receives arguments of the wrong type', () => {
    assert.throw(() => letterPositions(123), 'wrong argument type');
  });
});

describe('letterPositions when it receives valid arguments', () => {
  it('should return an object', () => {
    assert.isObject(letterPositions('string'));
  });
  it('should return an object with a key for each letter of the argument string', () => {
    const result = letterPositions('abc');
    assert.hasAllKeys(result, ['a', 'b', 'c']);
  });
  it('should not contain keys for letters not in the argument string', () => {
    const result = letterPositions('abc');
    assert.equal(Object.keys(result).length, 3);
    assert.hasAllKeys(result, ['a', 'b', 'c']);
  });
  it('should identify the indices where each of the letters occurs in the argument string', () => {
    const result = letterPositions('abc abc');
    const expectedResult = { 'a': [0, 4], 'b': [1, 5], 'c': [2, 6] };
    assert.deepEqual(result, expectedResult);
  });
});
