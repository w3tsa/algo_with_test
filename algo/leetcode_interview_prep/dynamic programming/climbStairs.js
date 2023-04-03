/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you 
climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// function climbStairs(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// }

function climbStairs(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[n - 1] + dp[n - 2];
  }

  return dp[n];
}

// climbStairs(4);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('#climbStairs', () => {
    it('should return 2', () => {
      expect(climbStairs(2)).toEqual(2);
    });
    it('should return 3', () => {
      expect(climbStairs(3)).toEqual(3);
    });
    it('should return 5', () => {
      expect(climbStairs(4)).toEqual(5);
    });
  });
}
