const { assert } = require('chai');
const { findKey } = require('../findKey');

describe('findKey when it receives invalid input', function() {
  it('throws an error if it receives the wrong number of arguments', function() {
    assert.throw(() => findKey(), 'Not enough arguments! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
    assert.throw(() => findKey({}, (x) => x, 'X'), 'Too many arguments! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
  });
  it('throws an error if it receives the wrong type of arguments', function() {
    assert.throw(() => findKey('x', (x) => x), 'Wrong argument types! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
    assert.throw(() => findKey({}, ''), 'Wrong argument types! findKey() requires 2 arguments: an object, and a predicate callback which returns a boolean.');
  });
});

describe('findKey when it receives valid input', function() {
  it('returns a string if it finds a key which satisfies the predicate', function() {
    assert.isString(findKey({ 'x': 'y' }, () => true));
  });
  it('returns a undefined if it does not find a key which satisfies the predicate', function() {
    assert.isUndefined(findKey({ 'x': 'y' }, () => false));

  });
  it('returns returns the correct key', function() {
    const inputObject = { 'x': 'y', 'a': 'b' };
    const inputPredicate = (value) => value === 'b';
    assert.equal(findKey(inputObject, inputPredicate), 'a');
  });
  it('returns returns the first instance of the key which satisfies the predicate', function() {
    const inputObject = { 'x': 'y', 'z': 'y' };
    const inputPredicate = (value) => value === 'y';
    assert.equal(findKey(inputObject, inputPredicate), 'x');
  });
});
