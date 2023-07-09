const { assert } = require('chai');
const { isFunction } = require('../isFunction');

describe('isFunction when it receives invalid input', () => {
  it('should throw an error if passed more than one argument', () => {
    assert.throw(() => isFunction('arg1', 'arg2'), 'too many arguments');
  });
  it('should return undefined if passed no arguments', () => {
    assert.isUndefined(isFunction());
  });
});

describe('isFunction when it receives valid arguments', () => {
  it('should return true if the argument is a function', () => {
    const result = isFunction(() => { });
    const expectedResult = true;
    assert.equal(result, expectedResult);
  });
  it('should return false if the argument is nota function', () => {
    const result = isFunction('string');
    const expectedResult = false;
    assert.equal(result, expectedResult);
  });
});