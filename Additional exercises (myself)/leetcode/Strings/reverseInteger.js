// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//solution 1:

var reverse = function(x) {
  if (x < -1 * 2 ** 31 || x > 2 ** 31 - 1) return 0;
  let result =
    (x < 0 ? -1 : 1) *
    Number(
      String(Math.abs(x))
        .split('')
        .reverse()
        .join('')
    );
  if (result < -1 * 2 ** 31 || result > 2 ** 31 - 1) return 0;
  return result;
};

//solution 2:

var reverse = function(x) {
  const y = x.toString();
  let rev = '';
  for (let i = 0; i < y.length; i++) {
    rev += '' + y[y.length - 1 - i];
  }

  let res = parseInt(rev, 10);
  if (y[0] === '-') {
    res *= -1;
  }
  const max = Math.pow(2, 31);
  if (res > max - 1 || res < -1 * max) {
    return 0;
  }

  return res;
};

//solution 3:

var reverse = function(x) {
  if (x < 10 && x > -10) {
    return x;
  }

  let unsignedNum = Math.abs(x);
  let sign = x / unsignedNum;

  let revNum = new Number(
    String(unsignedNum)
      .split('')
      .reverse()
      .join('')
  );
  let result = sign * revNum;
  let max = Math.pow(2, 31);

  if (result < -1 * max || result > max - 1) {
    return 0;
  }

  return result;
};
