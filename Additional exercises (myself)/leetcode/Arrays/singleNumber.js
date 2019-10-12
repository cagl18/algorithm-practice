// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//SOLUTION 1: using hash table. time Complexity: O(n) . space complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = {};

  for (let num of nums) {
    if (hash[num]) {
      hash[num] = null;
      delete hash[num];
    } else if (!hash[num]) {
      hash[num] = true;
    }
  }

  return Object.keys(hash)[0];
};

//Solution 2: Using XOR. Time Complexity O(N). Space complexity O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};
