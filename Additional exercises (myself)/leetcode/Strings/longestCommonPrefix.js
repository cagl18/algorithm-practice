// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

//solution 2:
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return '';
  let prefix = strs[0];
  for (let str of strs)
    while (!str.startsWith(prefix))
      prefix = prefix.substring(0, prefix.length - 1);
  return prefix;
};

var longestCommonPrefix = function(strs) {
  let long = '';

  if (strs.length === 0 || strs === undefined) {
    return long;
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return long;
      }
    }
    long += strs[0][i];
  }
  return long;
};
