const { assert } = require('chai');
const { map } = require('../map');

describe('map when it is given invalid arguments', () => {
  it('should throw an error if given the wrong number of arguments', () => {
    assert.throw(() => map(), 'not enough arguments');
    assert.throw(() => map([1, 2, 3], (x) => x + 1, 'extra arg'));
  });
  it('should throw an error if given arguments of the wrong type', () => {
    assert.throw(() => map('not array', (x) => x + 1), 'invalid argument type');
    assert.throw(() => map([1, 2, 3], 'not a function'), 'invalid argument type');
  });
});

describe('map when it is given valid arguments', () => {
  it('should return an array', () => {
    assert.isArray([1, 2, 3], (x) => x + 1);
  });
  it('should return an array containing the results of the callback being invoked once on each element', () => {
    const inputArray = [1, 2, 3];
    const inputCallback = (x) => x * 2;
    const result = map(inputArray, inputCallback);
    const expectedResult = [2, 4, 6];
    assert.deepEqual(result, expectedResult);
  });
  it('should return a copy of the array if no callback is given', () => {
    const inputArray = ['a', 'b', 'c'];
    const result = map(inputArray);
    assert.deepEqual(result, ['a', 'b', 'c']);
    result.push('d');
    assert.notDeepEqual(inputArray, result);
  });
});