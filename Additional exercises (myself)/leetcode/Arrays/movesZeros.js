// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead. Time Complexity O(N). Space complexity O(1)
 */

//Solution 1: Time Complexity O(n)   . Space Complexity: O(1).

var moveZeroes = function(nums) {
  let stoper = 'S',
    i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 'S') {
      nums.splice(i, 1);
      return nums;
    }
    if (nums[i] === 0) {
      if (stoper) {
        nums.push(stoper);
        stoper = null;
      }
      nums.push(...nums.splice(i, 1));
      i--;
    }
  }
  return nums;
};

//Solution 2: Time Complexity O(n)   . Space Complexity: O(1).

var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};
