// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(3) === 2
//   fib(4) === 3
//   fib(5) === 5
//   fib(6) === 8

// instructor solutions

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return cache[args];
  };
}

function slowFib(n) {
  //memoize function
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// ===================================

// function fib(n, memo = []) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }

//   return result[n];
// }

// my solutions

// function fib(n, memo = []) {
//   //   // Dymanic: storing the value of previouly computed fib() into an array
//   //   // Time complexity guess : O(2N), space complexity: O(N))  ????

//   if (n < 2) {
//     return n;
//   }

//   if (memo[n] > 0) {
//     return memo[n];
//   }

//   const result = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = result;
//   return result;
// }

// function fib(n) {
//   // recursive solution
//   // basecase if n<=2 return 1
//   // fib(n-1) + fib(n-2)
//   // time complexity O(2^n)
//   // Space complexity O(2^n) ??????

//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   // if n<=2 return 1
//   // have an initial array with two element,  looping from 0 to n-1 and calculate the next index element by adding array[i] + array[i+1]
//   // return array[n-1]
//   // time complexity O()

//   let sum = 1;
//   const array = [1, 1];

//   if (n === 0) {
//     return 0;
//   }

//   if (n <= 2) {
//     return 1;
//   }

//   for (let i = 0; i < n; i++) {
//     array.push(array[i] + array[i + 1]);
//     console.log(array);
//   }
//   return array[n - 1];
// }

module.exports = fib;
