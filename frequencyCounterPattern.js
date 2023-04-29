console.log("------------Frequency Counter Pattern------------");

// ? 1. Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// !using nested loop
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// time --> quadratic

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 3], [4, 4, 1])); // false
// console.log(same([1, 2, 3, 5, 2], [4, 4, 1, 9, 25])); // true

// ! using frequency counter pattern

function same2(arr1, arr2) {
  if (arr1.length !== arr1.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];

    // if (!obj1[item]) {
    //   obj1[item] = 1;
    // } else {
    //   obj1[item]++;
    // }

    obj1[item] = (obj1[item] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    // if (!obj2[item]) {
    //   obj2[item] = 1;
    // } else {
    //   obj2[item]++;
    // }
    obj2[item] = (obj2[item] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }

  return true;
}

// time --> o(n)

console.log(same2([1, 2, 3], [4, 1, 9])); // true
console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 3], [4, 4, 1])); // false
console.log(same2([1, 2, 3, 5, 2], [4, 4, 1, 9, 25])); // true
