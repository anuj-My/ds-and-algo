console.log("------------Multiple Pointers Pattern------------");

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

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero2([-2, 0, 1, 3]));
console.log(sumZero2([1, 2, 3]));
console.log(sumZero2([-4, -3, -2, 1, 2, 3, 4, 5, 6]));
console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));