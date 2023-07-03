# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @switchtwisted/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArray, expectedArray)`: logs to terminal result of checking equality between two arrays.
* `assertEqual(actual, expected)`: logs to terminal result of checking equality between two primatives.
* `assertObjectsEqual(actualObject, expectedObject)`: logs to terminal results of checking equality between two non-array objects.
* `countLetters(string)`: counts the number of times an alphabetic character appears (case insensitive) in a string, returning an object of each found character and the total number of times it appeared.
* `countOnly(allItems, itemsToCount)`: takes as its arguments an array `allItems` an object `itemsToCount`.  The function searchs `allItems` for any strings matching keys of `itemsToCount` whose values are set to true, returning an object totalling the number of appearances of each found key. 
* `eqArrays(array1, array2)`: evaluates the deep equality of two arrays, returning a boolean.
* `eqObjects(obj1, obj2)`: evaluates the deep equality of two non-array objects, returning a boolean.
* `findKey(object, predicate)`: takes as its arguments an object and a predicate, returning a the first key whose value satisfies the provided `predicate`, or `undefined` if no such value exists.
* `findKeyByValue(object, value)`: takes as its argmuments an object `object` and a primative `value`, returning the first key whose value is strictly equal to `value`.
* `flatten(array)`: returns a new array which is a flattened version of the argument `array`.
* `head(array)`: returns the first element of `array`.
* `isFunction(object)`: evaluates whether the argument `object` is a function, returning a boolean value.
* `letterPositions(sentence)`: takes an argument string `sentence` and returns an object whose keys represent every non-space character (case insensitive) in the array, and whose values are each arrays listing every index where that character appears.
* `map(array, callback)`: returns a new array representing the result of calling the function `callback` on each element of the array `array`.
* `middle(array)`: returns a new array containing the middle element(s) of the array provided as its argument.  Arrays containing an even number of elements will return an array with their two middle elements, otherwise an array of the single middle element is returned.
* `tail(array)`: returns a new array containing all elements of the provided array except the first. 
* `takeUntil(array, predicate)`: returns a new array containing any element(s) of the argument `array`, appearing before an element satisfies the provided `predicate` (exclusive). If the first element satisfies the predicate, an empty array is returned.
* `without(source, itemsToRemove)`: takes as its arguments 2 arrays, `source` and `itemsToRemove`, returning a new array containing any elements of source not appearing in itemsToRemove.