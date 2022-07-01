/*
https://www.codewars.com/kata/58ba6fece3614ba7c200017f
*/
function palindrome(num) {
  //convert integer to an array
  const arrayOfDigits = Array.from(String(num), Number);

  //check if num is not integer
  if (!Number.isInteger(num)) {
    return "Not valid";
  }

  //check if num is integer but smaller then 0
  if (Number.isInteger(num) && num < 0) {
    return "Not valid";
  }

  //check if arrayOfDigits even or odd
  if (arrayOfDigits.length % 2 != 0) {
    return "Not even";
  }
  for (let i = 0; i <= arrayOfDigits.length / 2; i++) {
    console.log(arrayOfDigits.length);
    console.log(arrayOfDigits[arrayOfDigits.length]);

    if (arrayOfDigits[i] !== arrayOfDigits[arrayOfDigits.length - 1]) {
      return false;
    }
    return true;
  }
}
