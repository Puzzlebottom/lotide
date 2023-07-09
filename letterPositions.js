const letterPositions = function(sentence) {
  if (arguments.length < 1) throw new Error('not enough arguments');
  if (arguments.length > 1) throw new Error('too many arguments');
  if (typeof sentence !== 'string') throw new Error('wrong argument type');

  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    if (char === ' ') continue;
    results[char] = results[char] ? [...results[char], i] : [i];
  }
  return results;
};

module.exports = { letterPositions };


