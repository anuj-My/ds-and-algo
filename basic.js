console.log("----------Basic----------");
//  write a function for counting the frequency of each element in array.
// write a funtion that return the array of duplicate values .
// find prime number from the array of 1 to 100
// find the sum of two number that is equal to 10

//? count Frequency of Element in array
const countElementInArray = (arr) => {
  const result = {};

  for (const el of arr) {
    if (!result[el]) {
      result[el] = 1;
    } else {
      result[el]++;
    }
  }

  return result;
};

// console.log(countElementInArray([1, 2, 5, 2, 8, 1, 5]));
// console.log(countElementInArray([]));

//? sum of two number equal to TARGET!
const sum = (arr, target) => {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(sum([1, 2, 5, 2, 8, 1, 5], 10));
// console.log(sum([1, 2, 5, 2, 8, 1, 5], 7));
// console.log(sum([], 7));

// another method
const sum2 = (arr, target) => {
  if (arr.length === 0) return [];

  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    // this condition is only going to stop when -->  first > last
    let sum = arr[first] + arr[last];
    if (sum === target) {
      return [arr[first], arr[last]];
    } else if (sum > target) {
      last--;
    } else if (sum < target) {
      first++;
    }
  }
};

// console.log(sum2([1, 2, 3, 4, 5, 5], 10));
// console.log(sum2([-1, 0, 1, 2, 3, 4, 5], 7));
// console.log(sum2([], 7));

function findLcm(x, y) {
  let lcm = 1;

  while (true) {
    if (lcm % x === 0 && lcm % y === 0) {
      break;
    }
    lcm++;
  }
  return lcm;
}
// console.log(findLcm(12, 20));

// another way : much faster
function findLCM(x, y) {
  let max = x > y ? x : y;

  while (true) {
    if (max % x === 0 && max % y === 0) {
      break;
    }
    max++;
  }

  return max;
}

// console.log(findLCM(12, 20));

function primeNumber(n) {
  let isPrime = true;
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

// console.log(primeNumber(17));
// console.log(primeNumber(20));
// console.log(primeNumber(0));
// console.log(primeNumber(7));

function primeWithArr(arr) {
  let prime = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    for (let j = 2; j < el + 1; j++) {
      if (el % j === 0 && el !== j) {
        break;
      } else if (el % j === 0 && el === j) {
        prime.push(el);
        break;
      }
    }
  }

  return prime;
}

// console.log(
//   primeWithArr([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   ])
// );
// console.log(primeWithArr([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(primeWithArr([]));

function primeWithN(n) {
  let prime = [];
  if (n < 2) return null;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        break;
      } else if (i % j === 0 && i === j) {
        prime.push(i);
        break;
      }
    }
  }
  return prime;
}

// console.log(primeWithN(7));
// console.log(primeWithN(15));
// console.log(primeWithN(25));
// console.log(primeWithN(100));

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

//? only return unique value from the array
// time complexity --> o(n)

function removeDuplicates(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;

      out[j++] = item;
    }
  }
  return out;
}

// console.log(removeDuplicates([1, 5, 5, 1, 2, 2, 6, 3, 8, 8]));

function uniqueOnly(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (!seen[item]) {
      seen[item] = 1;
    } else {
      seen[item]++;
    }
  }

  for (let key in seen) {
    if (seen[key] === 1) {
      //   out.push(key);
      out[j++] = Number(key);
    }
  }
  return out;
}

console.log(uniqueOnly([1, 1, 2, 3, 1, 4, 5, 5, 6])); // {1: 1, 2: 1 }

//? Return only dulplicate value once in array
function getDuplicate(arr) {
  const obj = {};
  let j = 0;
  let rep = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      rep.push(Number(key));
    }
  }

  console.log(obj);
  return rep;
}

// console.log(getDuplicate([1, 1, 2, 3, 1, 4, 5, 5, 6]));

// ? Duplicate values
// ? Return all the duplicate values from an array
const findDuplicate = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        res.push(arr[i]);
        break;
      }
    }
  }

  return res;
};

// console.log(findDuplicate([1, 2, 2, 1]));
// console.log(findDuplicate([1, 2, 5, 1, 8, 1, 5]));
// console.log(findDuplicate([1, 2, 5, 2, 2, 1, 1, 2, 5, 5, 5]));
// console.log(findDuplicate([1, 2, 5]));
// console.log(findDuplicate([]));

function getAllDuplicate(arr) {
  const obj = {};
  let j = 0;
  let rep = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
      rep[j++] = item;
    }
  }

  console.log(obj);
  return rep;
}

// console.log(getAllDuplicate([1, 1, 2, 3, 1, 4, 5, 5, 6]));
