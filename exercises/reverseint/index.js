// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//===============================================================
// My Soution
//===============================================================

// function reverseInt(n) {
//   //spit n into sign and abs(n)
//   //if abs less than 10 , return n
//   // (reverse number) convert number to String, convert string into Array, reverse Array, convert to string, convert to number
//   // return sign * reverseAbs

//   const abs = Math.abs(n);
//   const sign = n / abs;

//   if (abs < 10) {
//     return n; //edge case
//   }

//   //reverse number
//   const revString = String(abs)
//     .split('')
//     .reverse()
//     .join('');

//   return sign * Number(revString);
// }

//===============================================================
// Instructor Soution
//===============================================================

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
