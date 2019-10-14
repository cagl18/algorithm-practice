// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//solution 1: brute force approach. Time Complexity O(n^2). Space Complexity. O(1).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//solution 2: using hash table. Time complexity O(N). Space complexity O(N)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] > -1 && i !== hash[target - nums[i]]) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
};
