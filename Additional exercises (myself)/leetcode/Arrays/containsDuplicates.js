//solution 1: using sorting . time complexity O(NlogN). space Complexity: O(1) [usually sorting algorithm are O(i) space complexity]
var containsDuplicate = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

//solution 1: using sorting . time complexity O(N). space Complexity: O(N)

var containsDuplicate = function(nums) {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};
