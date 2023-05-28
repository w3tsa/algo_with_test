/* Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.

Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

 

Example 1:

Input: piles = [5,3,4,5]
Output: true
Explanation: 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.
Example 2:

Input: piles = [3,7,2,3]
Output: true */

function stoneGame(piles) {
  const n = piles.length;

  //   create a 2d DP array with dimensions (n + 1)  * (n + 1)
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  //   console.log(dp);
  // base case: dp[i][1] represents the maximum number of stones Alice can get
  // when there is only one pile ( i = j)
  for (let i = 0; i < n; i++) {
    dp[i][i] = piles[i];
  }
  // fill the DP array in a bottom up manner
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      const k = j + i - 1;

      // Alice choose the first pile and Bob plays optimally, so Allice's advantage is dp[i + 1][k]
      dp[j][k] = Math.max(piles[j] - dp[j + 1][k], piles[k] - dp[j][k - 1]);
    }
  }

  console.log(dp);
  return dp[0][n - 1] > 0;
}

console.log(stoneGame([5, 3, 4, 5]));
// console.log(stoneGame([3, 7, 2, 3]));
