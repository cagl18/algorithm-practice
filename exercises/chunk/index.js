// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//===============================================================
// Instructor Solution
//===============================================================

// function chunk(array, size) {
//     //while loop solution
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     console.log('chunked', chunked);
//     index += size;
//   }
//   return chunked;
// }

// function chunk(array, size) {
//     //for loop solution
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

//===============================================================
// My Soutions
//===============================================================

function chunk(array, size) {
  //recursive solution
  // [1,2,3,4,5] size=2
  // 1st itera = [[1,2], (chunk([3,4,5],2))]
  // 2nd itera = [[3.4], (chunk([5],2))]
  // if array.length is equal or smaller than size, return array of array
  // if array.length greater than size, recursive call forward the base case

  if (array.length <= size) {
    return [array];
  } //base case

  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}

// function chunk(array, size) {
//   let i;
//   let j;
//   const newArray = [];
//   for (i = 0; i < array.length; i++) {
//     let sub = [];
//     for (j = i; j < i + size; j++) {
//       if (j === array.length) {
//         break;
//       }
//       sub.push(array[j]);
//     }
//     i = j - 1;
//     if (sub.length) {
//       newArray.push(sub);
//     }
//   }
//   console.log('input: ', array, 'size: ', size, 'output: ', newArray);
//   return newArray;
// }

module.exports = chunk;
