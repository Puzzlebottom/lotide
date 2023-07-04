const chai = require('chai');
const assert = chai.assert;

const countLetters = require('../countLetters');

describe('countLetters when it receives invalid output', function() {
  it('should throw an error if it receives the wrong number of arguments', function() {

    assert.throws(() => countLetters("a", "b"), "Too many arguments! countLetters() takes one argument, a string whose letters are to be counted");
    assert.throws(() => countLetters(), "Not enough arguments! countLetters() takes one argument, a string whose letters are to be counted");
  });
  it('should throw an error if it receives anything but a string as an argument', function() {

    assert.throws(() => countLetters({}), "Wrong argument type! countLetters() takes one argument, a string whose letters are to be counted");
  });
});
describe('countLetters when it receives valid output', function() {
  it('should return an empty object when passed an empty string', function() {
    const input = "";
    assert.isEmpty(countLetters(input));
  });
  it('should return an object', function() {
    const input = "a";
    assert.isObject(countLetters(input));
  });
  it('should not count spaces', function() {
    const input = " ";
    assert.equal(countLetters(input)[" "], undefined);
  });
  it('should ignore case, returning counts in lower case', function() {
    const input = "Z";
    assert.equal(countLetters(input)["Z"], undefined);
    assert.equal(countLetters(input)["z"], 1);
  });
  it('should return an accurate count of all the letters in the string', function() {
    const input = "Candy Corn";
    let output = countLetters(input);
    assert.equal(output["a"], 1);
    assert.equal(output["c"], 2);
    assert.equal(output["q"], undefined);
  });
});
