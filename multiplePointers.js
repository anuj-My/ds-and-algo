console.log("------------Multiple Pointers Pattern------------");

// ? Multiple Pointer -->

// ! Creating pointers or values that correspond to an index or position and move towards the begining end or middle based on a certain condition

// ! Very efficient for solving problems with minimal space complexity as well

// ? 1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return  an array that includes both values that sum to zero or undefined if a pair does not exist.

// ! method 1: time complexity --> quadratic
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
// console.log(sumZero([-4, -3, -2, 1, 2, 3, 4, 5, 6]));

// ! method 2 with multiple pointer: time complexity --> o(n) linear

const sumZero2 = (arr) => {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum === 0) {
      return [arr[first], arr[last]];
    } else if (sum > 0) {
      last--;
    } else if (sum < 0) {
      first++;
    }
  }
};

// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero2([-2, 0, 1, 3]));
// console.log(sumZero2([1, 2, 3]));
// console.log(sumZero2([-4, -3, -2, 1, 2, 3, 4, 5, 6]));
// console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));

// ? 2. Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let i = 0;
  if (arr.length === 0) return i;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1]));
console.log(countUniqueValues([]));
