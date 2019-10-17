// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

//solution 1:

var strStr = function(haystack, needle) {
  if (needle.trim().length === 0 || haystack === needle) {
    return 0;
  }

  if (!haystack.includes(needle)) {
    return -1;
  } else {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      let checker = haystack
        .split('')
        .slice(i, i + needle.length)
        .join('');
      console.log(checker);
      if (checker === needle) {
        return i;
      }
    }
  }
};

//solution 2:

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

var strStr = function(haystack, needle) {
  return needle ? haystack.indexOf(needle) : 0;
};
