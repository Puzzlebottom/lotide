const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actualArray, expectedArray) {
  let isEqual = eqArrays(actualArray, expectedArray);
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}[${actualArray}]${comparator}[${expectedArray}]`);
};


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

let testString = "hello";
let testStringResult = letterPositions(testString);
let withSpaces = "so many spaces";
let withSpacesResult = letterPositions(withSpaces);
let withCapitals = "Bobby";
let withCapitalsResult = letterPositions(withCapitals);

assertArraysEqual(testStringResult["h"], [0]);
assertArraysEqual(testStringResult["e"], [1]);
assertArraysEqual(testStringResult["l"], [2, 3]);
assertArraysEqual(testStringResult["o"], [4]);
assertEqual(withSpacesResult["M"], undefined);
assertEqual(withSpacesResult[" "], undefined);
assertEqual(withCapitalsResult["B"], undefined);
assertArraysEqual(withCapitalsResult["b"], [0, 2, 3]);


