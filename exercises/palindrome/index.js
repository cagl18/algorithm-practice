// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//===============================================================
// My Soution
//===============================================================

// function palindrome(str) {
//     //solution 1
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   console.log(reversed);
//   return str === reversed;
// }

// function palindrome(str) {
//   //solution 2 --failed attempt

//   const isPal = str.split('').reduce((acu, char, index, arr) => {
//     console.log(acu, char.lower, arr[arr.length - 1 - index].lower);
//     return acu && char.lower == arr[arr.length - 1 - index].lower;
//   }, true);

//   console.log('is :', str, 'Palindrome: ', isPal);
// }

// function palindrome(str) {
//     //solution 2 --failed attempt

//     const reversed = str.split('').reduce((acu, char, index, arr) => {
//       console.log(acu, char);
//       return acu + char;
//     }, '');

//     const isPal = reversed == str ? true : false;
//     console.log('reversed string is: ', reversed);
//     console.log('is :', str, 'Palindrome: ', isPal);

//     return isPal;
//   }

//===============================================================
// Instructor Soution
//===============================================================

function palindrome(str) {
  //     //solution 1

  const reverse = str
    .split('')
    .reverse()
    .join('');

  return reverse === str;
}

// function palindrome(str) {
//   //     //solution 2 - solution is not optinal since element in the array are compared twice, after half of the array it will be a repeated comparison
//   return str.split('').every((char, i, arr) => {
//     return char === arr[arr.length - i - 1];
//   });
// }

module.exports = palindrome;
