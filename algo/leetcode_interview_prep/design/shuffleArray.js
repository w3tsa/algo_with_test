/* 
Given an integer array nums, design an algorithm to randomly shuffle the array. 
All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
 

Example 1:

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
*/

class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    const shuffled = [...this.nums];

    for (let i = 0; i < shuffled.length; i++) {
      let j = Math.floor(Math.random() * shuffled.length);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

let arr1 = new Solution([1, 2, 3]);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('#solution', () => {
    it('should return the original array', () => {
      expect(arr1.reset()).toEqual([1, 2, 3]);
    });
    it('should return all the shuffled array', () => {
      expect(arr1.shuffle()).toEqual([3, 2, 1] || [1, 3, 2] || [3, 1, 2]);
    });
  });
}
