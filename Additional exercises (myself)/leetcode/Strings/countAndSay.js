// Count and Say
// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

//solution 1:

var countAndSay = function(n) {
  let num = [1];

  while (n > 1) {
    let counter = 1;
    let newNum = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] === num[i + 1]) {
        counter++;
      } else {
        newNum.push(counter, num[i]);
        counter = 1;
      }
    }
    num = newNum;
    n--;
  }
  return num.join('');
};
