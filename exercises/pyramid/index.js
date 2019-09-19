// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

function pyramid(n, row = 0, level = '') {
  // instructor solution

  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);

  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

// function pyramid(n, row = 0, level = '') {
//   // my recursive solution
//   if (level.length === 2 * n - 1) {
//     console.log(level);

//     if (n > row + 1) {
//       return pyramid(n, row + 1);
//     } else {
//       return;
//     }
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);

//   if (level.length >= midpoint - row && level.length <= midpoint + row) {
//     level += '#';
//   } else {
//     level += ' ';
//   }
//   return pyramid(n, row, level);
// }

// function pyramid(n) {
//   //iterative solution
//   // one for loop to create row and one to create columns
//   //length of column 2*n-1 and length of row is n
//   //midpoint length of floor(column /2)

//   const midpoint = Math.floor((n * 2 - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (column >= midpoint - row && column <= midpoint + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// function pyramid(n) {
//   //create last row with n+2 number of '#'
//   //start last row and create the second last by removing '#' from beginning and end
//   // continue moving up by using the top row to create the next higher one, by replacing the first and last # of the string.
//   // from left move from zero to middle floor(string.length)/2 + 1

//   const rows = {};
//   let rowTemp = [];

//   rows[0] = '#';
//   if (n > 1) {
//     for (let i = 1; i < n*2-1; i++) {
//       rowTemp = rows[i - 1];
//       rows[i] += rowTemp;
//     }

//     const width = rows[n - 1].length;

//     for (let j = n - 1; j > 0; j--) {
//       for (let i = width - 1; i > 0; i--) {
//         console.log('rowTemp', rowTemp);
//         rowTemp = rows[j].split('');
//         rowTemp.splice(i, 1, ' ');
//         console.log('split last index ', i, rowTemp);
//         rowTemp.splice(width - 1 - i, 1, ' ');
//         console.log('split front: index ', width - 1 - i, rowTemp);
//         rows[j - 1] = rowTemp.join('');
//       }
//     }
//   }
//   console.log('rows', rows);
// }

module.exports = pyramid;
