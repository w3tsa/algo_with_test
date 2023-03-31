/*
Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

import { expect } from 'vitest';

const nums1 = [1, 2, 3, 4]; // [24,12,8,6]
const nums2 = [-1, 1, 0, -3, 3]; // [0,0,9,0,0]

// function productExceptSelf(nums) {
//   let n = nums.length;
//   let left = new Array(n);
//   let right = new Array(n);
//   let answer = new Array(n);
//   console.log(left, right);
//   // calculate product of all elements to the left of each element
//   left[0] = 1;
//   console.log(left);
//   for (let i = 1; i < n; i++) {
//     left[i] = left[i - 1] * nums[i - 1];
//   }
//   console.log(left);

//   // calculate product of all elements to the right of each element
//   right[n - 1] = 1;
//   console.log(right);
//   for (let i = n - 2; i >= 0; i--) {
//     right[i] = right[i + 1] * nums[i + 1];
//   }
//   console.log(right);

//   // calulate answer for each element as product of the left and right products
//   for (let i = 0; i < n; i++) {
//     answer[i] = left[i] * right[i];
//   }
//   return answer;
// }

/* o(1) space complexity */
function productExceptSelf(nums) {
  let n = nums.length;
  let output = new Array(n);
  output[0] = 1;

  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;

  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

productExceptSelf(nums1);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#productExceptSelf', () => {
    it('should return [24,12,8,6]', () => {
      expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });
    it('should return [0,0,9,0,0]', () => {
      expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
    });
  });
}
