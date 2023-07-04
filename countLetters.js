const assertEqual = require("./assertEqual");

const countLetters = function(string) {
  if (arguments.length === 0) throw new Error("Not enough arguments! countLetters() takes one argument, a string whose letters are to be counted");
  if (arguments.length > 1) throw new Error("Too many arguments! countLetters() takes one argument, a string whose letters are to be counted");
  if (typeof string !== "string") throw new Error("Wrong argument type! countLetters() takes one argument, a string whose letters are to be counted");

  let result = {};
  if (string === "") return result;
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
