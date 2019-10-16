// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// solution 1: Time Complexity O(N). Space Complexity O(N).

var isAnagram = function(s, t) {
  if (t.length !== s.length) {
    return false;
  }

  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] || 0;
    hash[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] <= 0 || !hash[t[i]]) {
      return false;
    } else if (hash[t[i]] > 0) {
      hash[t[i]]--;
    }
  }
  return true;
};

// solution 2: Time Complexity O(N log N). Space Complexity depend on sorted by usually O(1).

var isAnagram = function(s, t) {
  return (
    s
      .split('')
      .sort()
      .join('') ===
    t
      .split('')
      .sort()
      .join('')
  );
};
