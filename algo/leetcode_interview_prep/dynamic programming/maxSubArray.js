/* 
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/

function maxSubArray(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
    currentSum = Math.max(currentSum, 0);
  }

  return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('#maxSubArray', () => {
    it('should return 6', () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    });
    it('should return 1', () => {
      expect(maxSubArray([1])).toEqual(1);
    });
    it('should return 23', () => {
      expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
    });
  });
}
