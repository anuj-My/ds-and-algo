console.log("------------hello world------------");

// ? 1. Write a function which takes in a string and returns counts of each character in the string.

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

console.log(charCount("@HELLO world"));
console.log(charCount("Pin Number is @1234!"));
