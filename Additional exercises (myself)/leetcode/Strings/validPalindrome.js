// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

//solution1

var isPalindrome = function(s) {
  let arr = s
    .toLowerCase()
    .split('')
    .filter(el => /[a-z0-9]/i.test(el));
  return arr.join('') === arr.reverse().join('');
};

// solution 2

var isPalindrome = function(s) {
  let cleanedS = s
    .toLowerCase()
    .split('')
    .filter(el => /[a-z0-9]/i.test(el));
  // let cleanedS = s.toLowerCase().replace(/\W/g, '');
  let pointer1 = 0,
    pointer2 = cleanedS.length - 1;

  while (pointer1 < pointer2) {
    let char1 = cleanedS[pointer1];
    let char2 = cleanedS[pointer2];
    if (char1 !== char2) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
};
