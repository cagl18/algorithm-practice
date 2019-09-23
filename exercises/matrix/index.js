// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // result is array of arrays
  // two pointers for the rows and two pointers for the columns
  const results = [];

  for (let i = 0; i < n; i++) {
    results[i] = [];
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;

    //Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }

    endColumn--;

    //bottorm row;
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    //left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  return results;
}

// function matrix(n) {
//   // num of turns 2n-1
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     //   Top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startColumn][i] = counter;
//       counter++;
//     }
//     startRow++;

//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }

//     endColumn--;

//     //Bottow row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }

//     endRow--;

//     // left  column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }

//     startColumn++;
//   }

//   return results;
// }

module.exports = matrix;
