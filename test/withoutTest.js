const { assert } = require('chai');
const { without } = require('../without');

describe('without when if receives invalid input', () => {
  it('should throw an error if it receives the wrong number of inputs', () => {
    assert.throw(() => without([], [], []), 'too many arguments');
    assert.throw(() => without([]), 'not enough arguments');
  });
  it('should throw an error if it receives inputs of the wrong type', () => {
    assert.throw(() => without('string', []), 'invalid argument type');
    assert.throw(() => without([], 'string'), 'invalid argument type');
    assert.throw(() => without('string', 'string'), 'invalid argument type');
  });
});

describe('without when it receives valid inputs', () => {
  it('should return an array', () => {
    assert.isArray(without([1, 2, 3], [2]));
  });
  it('should return an array that contains all elements in the source array', () => {
    const result = without([1, 2, 3], [2]);
    assert.include(result, 1, 3);
  });
  it('should return an array that contains no elements listed in itemsToRemove', () => {
    const result = without([1, 2, 3], [2]);
    assert.notInclude(result, 2);
  });
  it('should return an empty array if the source array is empty', () => {
    const result = without([], [1]);
    assert.isEmpty(result);
  });
  it('should return a copy of source if the itemsToRemove array is empty', () => {
    const input = [1, 2, 3];
    const result = without(input, []);
    assert.include(result, 1, 2, 3);
    assert.deepEqual(result, input);
    input.push(4);
    assert.notDeepEqual(result, input);
  });
});