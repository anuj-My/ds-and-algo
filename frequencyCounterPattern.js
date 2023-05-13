console.log("------------Frequency Counter Pattern------------");

// ?  frequency counter -->

// ! This pattern uses objects or sets to collect values/frequencies of values.

// ! This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

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

// console.log(same2([1, 2, 3], [4, 1, 9])); // true
// console.log(same2([1, 2, 3], [1, 9])); // false
// console.log(same2([1, 2, 3], [4, 4, 1])); // false
// console.log(same2([1, 2, 3, 5, 2], [4, 4, 1, 9, 25])); // true

// ? 2. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (const val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (const val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("", "")); // true
// console.log(isAnagram("aaz", "zza")); // false
// console.log(isAnagram("rat", "car")); // false
// console.log(isAnagram("qwerty", "qeywrt")); // true

function validAnagram(str1, str2) {
  const obj = {};

  if (str1.length !== str2.length) return false;

  for (const val of str1) {
    obj[val] = (obj[val] || 0) + 1;
    // obj[val] ? obj[val]++ : (obj[val] = 1);
  }

  for (const val of str2) {
    if (!obj[val]) {
      return false;
    } else {
      obj[val]--;
    }
  }

  return true;
}

// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true

// ? 3. Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  // make object to return at end

  const charObj = {};
  // loop over string

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // if the char is a number/letter and not in object, add it and set value to 1
    let code = str.charCodeAt(i);
    // ! if (/[A-Za-z0-9]/.test(char)) {
    if (
      (code > 96 && code < 123) ||
      (code > 64 && code < 91) ||
      (code > 47 && code < 58)
    ) {
      if (!charObj[char]) {
        charObj[char] = 1;
      } else {
        // if the char is a number/letter and is a key in object, add one to count
        charObj[char]++;
      }
    }
  }
  //   if char is something else (space, period etc ) don't do anthing
  // return object at the end
  return charObj;
}

// TIME COMPLEXITY --> o(n)

// console.log(charCount("@HELLO world"));
// console.log(charCount("Pin Number is @1234!"));

// ? 4. Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

const sameFrequency = (n1, n2) => {
  if (!n1 || !n2) return false;

  let num1 = String(n1);
  let num2 = String(n1);

  let obj1 = {};
  let obj2 = {};

  for (const i of num1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  for (const j of num2) {
    obj2[j] = (obj2[j] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj2[key] === obj1[key]) {
      return true;
    }
  }

  return false;
};

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency());

// ? 5. Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there any duplicates among the argument passed in.

const areThereDuplicates = (...arr) => {
  let obj = {};

  // for (let i = 0; i < arr.length; i++) {
  //   const item = arr[i];

  //   obj[item] = (obj[item] || 0) + 1;
  // }

  // for (const key in obj) {
  //   if (obj[key] > 1) return true;
  // }

  // ! shorter way

  for (const i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
