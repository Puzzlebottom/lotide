const { assert } = require('chai');
const { takeUntil } = require('../takeUntil');

describe('takeUntil when it receives invalid input', () => {
  it('should throw an error if given the incorrect number of arguments', () => {
    assert.throw(() => takeUntil(), 'not enough arguments');
    assert.throw(() => takeUntil([], () => true, 'extra argument'), 'too many arguments');
  });
  it('should throw an error if given arguments of invalid type', () => {
    assert.throw(() => takeUntil('string', () => true), 'invalid argument type');
    assert.throw(() => takeUntil([], 'string'), 'invalid argument type');
  });
});

describe('takeUntil when it receives valid input', () => {
  it('should return an array', () => {
    const inputArray = [1, 2, 3];
    const inputPredicate = (x) => x === 2;
    const result = takeUntil(inputArray, inputPredicate);
    assert.isArray(result);
  });
  it('should return an empty array if the argument is an empty array', () => {
    const inputArray = [];
    const inputPredicate = (x) => x === 2;
    const result = takeUntil(inputArray, inputPredicate);
    assert.isEmpty(result);
  });
  it('should return an array containing the correct elements', () => {
    const inputArray = [1, 2, 3];
    const inputPredicate = (x) => x === 2;
    const result = takeUntil(inputArray, inputPredicate);
    assert.include(result, 1);
  });
  it('should return an array containing none of the incorrect elements', () => {
    const inputArray = [1, 2, 3];
    const inputPredicate = (x) => x === 2;
    const result = takeUntil(inputArray, inputPredicate);
    const expectedResult = [1];
    assert.deepEqual(result, expectedResult);
  });
});