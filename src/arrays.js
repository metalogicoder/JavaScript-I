/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

const each = (elements, cb) => {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  const newArr = [];

  each(elements, item => newArr.push(cb(item)));

  return newArr;
};

const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

  for (let i = 0; i < elements.length; i++) {
    if (startingValue === undefined) {
      startingValue = elements[0];
      i++;
    }
    startingValue = cb(startingValue, elements[i]);
  }

  return startingValue;

  // ------------- Bonn's Solution ---------

  // const newArr = elements.slice();
  // let memo = startingValue || newArr.shift();
  // each(newArr, (item) => {
  //   memo = cb(memo, item);
  // });
  // return memo;
};

const find = (elements, cb) => {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  const newArr = [];

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) newArr.push(elements[i]);
  }

  return newArr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  // Create array to hold final result
  const result = [];

  // Helper function with recursion to adapt for different levels
  function dig(item) {
    // Update result array if number is found instead of array
    if (typeof item === 'number') result.push(item);
    // Loop through array items looking for number using above if statement
    for (let i = 0; i < item.length; i++) { dig(item[i]); }
    // Once all the loops finish return final result
    return result;
  }

  // Call dig function on elements and return result array
  return dig(elements);
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
