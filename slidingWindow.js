console.log("------------Sliding Window Pattern------------");

//? 1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    console.log(temp);
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }

    if (max < temp) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([1, 2, 5, 1, 6], 6)) // 6
// console.log(maxSubarraySum([], 4)) // null
