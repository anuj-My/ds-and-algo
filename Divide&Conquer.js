console.log("--------Divide and Conquer--------");

// ? Divide and Conquer -->

// ! This pattern involvees dividing a data set into smaller chunks and then repeating a process with a subset of data.

// ! This pattern can tremendously decrease time complexity

// ? 1. Given a SORTED array of integers, write a function called search, that accepts a value and returns the index here the value passed to the function is located. If the value is not found, return -1

// linear search
const search = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === n) {
      return i;
    }
  }

  return -1;
};

// console.log(search([1, 2, 3, 4, 5, 6], 3));
// console.log(search([1, 2, 3, 4, 5, 6], 6));
// console.log(search([1, 2, 3, 4, 5, 6], 11));

// binary search

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    let currentItem = arr[middle];

    if (currentItem < val) {
      min = middle + 1;
    } else if (currentItem > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11));
