const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};


const head = function(array) {
  return array[0];
};

module.exports = head;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);