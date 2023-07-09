const { assert } = require('chai');
const { flatten } = require('../flatten');

describe('flatten when it receives invalid input', function() {
  it('should throw an error if it receives the wrong number of arguments', () => {
    assert.throw(() => flatten(), 'not enough arguments');
    assert.throw(() => flatten(['array'], [], 0, 'extraArgument'), 'too many arguments');
  });
  it('should throw an error if the argument is not an array', () => {
    assert.throw(() => flatten('string'), 'invalid argument type');
  });
});

describe('flatten when it receives valid input', function() {
  it('should return an array', () => {
    assert.isArray(flatten(['string']));
  });
  it('should return an array with no nested arrays', () => {
    const input = [[[1], [2]], [[3], [4], [[5], [6]]]];
    const expectedResult = [1, 2, 3, 4, 5, 6,];
    assert.deepEqual(flatten(input), expectedResult);
  });
});