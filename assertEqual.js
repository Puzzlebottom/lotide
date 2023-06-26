const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  let message;
  if (isEqual) {
    message =  "👍 Assertion Passed: " + actual + " === " + expected;
  } else {
    message =  "👎 Assertion Failed: " + actual + " !== " + expected;
  }
  console.log(message);
};

assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);