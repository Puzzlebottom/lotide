const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  if (typeof sentence !== "string") return console.log(`These ${typeof sentence}s ain't no good fer countin'! How's about you gimme a string instead?`);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    if (char === " ") continue;
    results[char] = results[char] ? [...results[char], i] : [i];
  }
  return results;
};

module.exports = letterPositions;

// let testString = "hello";
// let testStringResult = letterPositions(testString);
// let withSpaces = "so many spaces";
// let withSpacesResult = letterPositions(withSpaces);
// let withCapitals = "Bobby";
// let withCapitalsResult = letterPositions(withCapitals);

// assertArraysEqual(testStringResult["h"], [0]);
// assertArraysEqual(testStringResult["e"], [1]);
// assertArraysEqual(testStringResult["l"], [2, 3]);
// assertArraysEqual(testStringResult["o"], [4]);
// assertEqual(withSpacesResult["M"], undefined);
// assertEqual(withSpacesResult[" "], undefined);
// assertEqual(withCapitalsResult["B"], undefined);
// assertArraysEqual(withCapitalsResult["b"], [0, 2, 3]);


