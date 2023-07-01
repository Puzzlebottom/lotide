const assertEqual = require("./assertEqual");

const tail = function(array) {
  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

module.exports = tail;

const array = [1, 2, 3];
let arrayTail = tail(array);
console.log(assertEqual(array.length, 3));
console.log(assertEqual(arrayTail.length, 2));
console.log(assertEqual(arrayTail[0], 2));