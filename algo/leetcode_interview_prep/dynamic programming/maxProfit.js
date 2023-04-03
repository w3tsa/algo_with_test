/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

maxProfit([2, 4, 1]);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('#maxProfit', () => {
    it('should return 5', () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    });
    it('should return 0', () => {
      expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    });
    it('should return 2', () => {
      expect(maxProfit([2, 4, 1])).toEqual(2);
    });
  });
}
