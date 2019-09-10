// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//===============================================================
// My Soution
//===============================================================

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  str.split('').map(ch => {
    chars[ch] = chars[ch] + 1 || 1;
    if (max < chars[ch]) {
      max = chars[ch];
      maxChar = ch;
    }
  }); //creating the maxChar object

  return maxChar;
}

// function maxChar(str) {
//   //lopp over string and find max occurance of each leter
//   //which maxChar

//   let max = 0; //max ocurrance
//   let charMax = ''; // which character

//   const chars = {};

//   for (let ch of str) {
//     if (!chars[ch]) {
//       chars[ch] = 1;
//     } else {
//       chars[ch]++;
//     }
//     if (max < chars[ch]) {
//       max = chars[ch];
//       charMax = ch;
//     }
//   }

//   return charMax;
// }

module.exports = maxChar;
