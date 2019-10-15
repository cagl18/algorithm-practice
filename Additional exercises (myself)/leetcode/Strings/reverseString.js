// Reverse String
// Solution
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Out

//solution 1: Time Complexity O(N). Space complexity O(1).

var reverseString = function(s) {
  s.reverse();
  [].shift();
};

//solution 2: Time Complexity O(N). Space complexity O(1).

var reverseString = function(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    s.push(s[i]);
  }
  s.splice(0, s.length / 2);
  return s;
};

//solution 3: Time Complexity O(N). Space complexity O(1).
var reverseString = function(s) {
  let first = 0,
    second = s.length - 1;

  while (first < second) {
    let temp = s[first];
    s[first] = s[second];
    s[second] = temp;
    first++;
    second--;
  }

  return s;
};
