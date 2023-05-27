/*  
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

*/

// function isPowerOfThree(int) {
//   if (int === 3 || int === 1) {
//     return true;
//   } else if (int < 1) {
//     return false;
//   }

//   return helper(int / 3);
// }

// console.log(isPowerOfThree(1));

function isPowerOfThree(n) {
  if (n <= 0) return false;

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
}

console.log(isPowerOfThree(27));
