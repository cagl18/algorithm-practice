// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//======================================================================
//My Solutions
//======================================================================

// function reverse(str) {
//   //solution 1   --runtime .249s
//   const arrString = str.split('');
//   let newString = '';
//   for (let i = arrString.length - 1; i >= 0; i--) {
//     newString += arrString[i];
//   }

//   return newString;
// }

// function reverse(str) {
//   //solution 2  --runtime 1.664s
//   return str
//     .split('')
//     .map((chr, index, arr) => arr[arr.length - 1 - index])
//     .join('');
// }

//======================================================================
//Instructor Solutions
//======================================================================

// function reverse(str) {
//   //solution 1   --runtime 0.309

//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   //solution 2   --runtime 0.288
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// function reverse(str) {
//   //solution 3   --runtime 0.309

//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// //Debuggin Example
// function reverse(str) {
//   //solution 2   --runtime 0.288
//   debugger; // this will stop the program execution on this line so that we can inspect our code variables and try to find the problem.
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

function reverse(str) {
  //solution 1   --runtime 0.309

  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }
  return reversed;
}

reverse('asdf'); // need to call the function manually if you want to debug code

module.exports = reverse;
