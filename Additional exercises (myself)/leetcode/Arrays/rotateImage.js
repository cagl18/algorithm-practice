// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

//Solution 1: Time complexity O(n^2). Space complexity O(1)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // every row will convert into a column. row 0 => col length -1, row 1 => col length -2, row 2 => col length-3.
  //Algo: save the last colum. replace first row into last column

  // iterate through array
  for (let i = 0; i < matrix.length; i++) {
    // keeps track of our matrix length inside of inner loop
    const tracker = matrix.length - 1;

    // inner loop that starts at the end of the matrix length
    for (var j = matrix.length - 1; j >= 0; j--) {
      // assigns the popped value to current
      let current = matrix[i].pop();
      // unshifts the valued assigned to current to the first position of last array
      matrix[tracker].unshift(current);
      // decrement tracker after each j iteration
      tracker--;
    }
  }
  return matrix;
};

// Solution 2: Time complexity O(n^2). Space complexity O(1)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (!matrix || !matrix.length) return [];

  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
