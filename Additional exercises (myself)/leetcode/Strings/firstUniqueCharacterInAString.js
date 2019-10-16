// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

//solution 1:
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
      return i;
    }
  }
  return -1;
};

//solution 2:

var firstUniqChar = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] || 0;
    hash[s[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
