console.log("------------Sliding Window Pattern------------");

// ? Sliding Window -->

// ! This pattern involves creating a window which can either be an array or number from one position to another.

// ! Depending on a certain condition, the window either increases or closes (and a new window is created)

// ! Very useful for keeping track of a subset of data in an array/string etc.

//? 1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }

    console.log(temp);
    if (max < temp) {
      max = temp;
    }
  }

  return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([1, 2, 5, 1, 6], 6)) // 6
// console.log(maxSubarraySum([], 4)) // null

const maxSubarraySum2 = (arr, n) => {
  let max = 0;
  let temp = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }
  max = temp;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];

    max = temp > max ? temp : max;

    // max = Math.max(max, temp)
  }

  return max;
};

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 3));
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
