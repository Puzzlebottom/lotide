const assertEqual = require("./assertEqual");

const countLetters = (string) => {
  if (typeof string !== "string") return console.log(`These ${typeof string}s ain't no good fer countin'! How's about you gimme a string instead?`);
  let result = {};
  for (let char of string.split(" ").join("").toLowerCase()) {
    result[char] = result[char] ? result[char] += 1 : 1;
  }
  return result;
};

module.exports = countLetters;

// let testString = "Candy corn";
// let testEmpty = "";
// let testNumber = 1234567890;

// assertEqual(countLetters(testString)["c"], 2);
// assertEqual(countLetters(testString)[" "], undefined);
// assertEqual(countLetters(testString)["a"], 1);
// assertEqual(countLetters(testString)["z"], undefined);
// assertEqual(countLetters(testEmpty)["a"], undefined);
// assertEqual(countLetters(testNumber), undefined);
