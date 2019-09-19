// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution
// problem keywords
// same charactatera and same quantity
// only a-z A-Z 0-9

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

//------------------------------------------------------------

// function buildCharMap(str) {
// //   Solution 2
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   const Akeys = Object.keys(aCharMap);
//   const BKeys = Object.keys(bCharMap);

//   if (Akeys.length !== BKeys.length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

//------------------------------------------------------------

// function anagrams(stringA, stringB) {
////   Solution 3
//   // clean up stringA and stringB to remove space and puntauaction and make both string the same cap case ( lower )
//   // check if string length is the same
//   // if strign lenght is same, compare each character. create object with key of letters and value of count for eacth string A and stringB

//   const cleanedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const cleanedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   if (cleanedStringA.length !== cleanedStringB.length) {
//     return false;
//   }

//   const sortedArrayA = cleanedStringA.split('').sort();
//   const sortedArrayB = cleanedStringB.split('').sort();

//   let isAnagram = true;
//   for (let i = 0; i < sortedArrayA.length; i++) {
//     if (sortedArrayA[i] !== sortedArrayB[i]) {
//       isAnagram = false;
//     }
//   }

//   return isAnagram;
// }

module.exports = anagrams;
