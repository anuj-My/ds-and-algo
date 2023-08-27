// ? Recursion --> Function calls itself (different input) until it reaches a certain condition (base case)

// ! countDown
function countDown(num) {
  if (num <= 0) {
    console.log("done");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

// ! Sum Range
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(5));

// ! ------Factorial------
// ? Iteratively

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
// console.log(factorial(4));

// ? Factorial Recursion
function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
}
console.log(factorialRecursive(4));

// ! ------Helper Method Recursion------

// ? collectOddValues

function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);

  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

// ! ------Pure Recursion------
// ? collectOddValuesR

function collectOddValuesR(arr) {
  let result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddValuesR(arr.slice(1)));
  return result;
}

console.log(collectOddValuesR([1, 2, 3, 4, 5, 6]));

// ! ------Practice Question------

// ? Power

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 3));

// ? productOfArray

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3]));

// ? recursiveRange

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(5));

// ? Fibonacci
// 0 1 1 2 3 5 8 13 21 34

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(10));

// ? Reverse

function reverse(str) {
  if (str === "") return;
}

console.log(reverse("dog"));
