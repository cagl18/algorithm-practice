// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

//Solution 1:

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }

  return [1, ...digits];
};

//solution 2:

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};

var plusOne = function(digits) {
  // [1,2,3] ==> [1,2,4]
  // [9,9,9] ==> [1,0,0,0]
  //start from the end of the array. if last element is btw 0-8, then add 1 and return.
  //if last element is 9, then change to zero and keep carrier to be added to the second to last element.

  let addingNum = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (addingNum) {
      if (digits[i] < 9) {
        digits[i] += addingNum;
        addingNum--;
      } else {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(addingNum);
          addingNum--;
        }
      }
    }
  }

  return digits;
};
