/* 
Fibonacci Sequence
[1,1,2,3,5,8,13,....]
*/
/* top to bottom */
// function fibonacciSequence(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fibonacciSequence(n - 1, memo) + fibonacciSequence(n - 2, memo);
//   return memo[n];
// }

// console.log(fibonacciSequence(20));

/* bottom to up with tabulation */
/* it will not have the stack overflow problem */
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib(10));
