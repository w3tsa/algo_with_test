/* 
Greedy algorithm:
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

function maxProfit(prices) {
  // [7,1,5,3,6,4]
  // initialize a variable to be the prices[0]; -> let leastPrice = prices[0] 7
  let leastPrice = prices[0];
  // store another profit = 0
  let profit = 0;
  // loop to the next item -> 1 < 7 || 1 > 7 -> leastPrice = Math.min(leastPrice, prices[j]) 1
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < leastPrice) {
      leastPrice = prices[i];
      //.....
    } else {
      // next item -> 5 < 1 || 5 > 1 -> profit = 5 - 1 4 leastPrice = 5
      profit = profit + (prices[i] - leastPrice);
      leastPrice = prices[i];
    }
  }
  //next item -> 3 < 5 || 3 > 5 -> leastPrice = Math.min(leastPrice, prices[j])
  return profit;
}
// leastPrice = 4
// profit = 3
// total
// [7, 1, 5, 3, 6, 4]
//                 4

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#maxProfit", () => {
    it("should return 7", () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    });
    it("should return 4", () => {
      expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    });
    it("should return 0", () => {
      expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    });
  });
}
