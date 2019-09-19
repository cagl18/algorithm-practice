// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// function capitalize(str) {
//   // solution 2
//   const words = [];

//   for (word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// function capitalize(str) {
//   // solution 1
//   // break down the str into an array of words
//   // capitalize the first letter of each word

//   const wordsArray = str.split(' '); // array of words ['a', 'short', 'sentence']

//   return wordsArray
//     .map(word => {
//       if (word.length <= 1) {
//         return word.toUpperCase();
//       }
//       let wArray = word.split(''); // ['s','h','o','r','t']    ; slice ['h','o','r','t']
//       return [wArray[0].toUpperCase(), ...wArray.slice(1)].join(''); // 'Short'
//     })
//     .join(' '); // ['A', 'Short', 'Sentence']
// }

module.exports = capitalize;
