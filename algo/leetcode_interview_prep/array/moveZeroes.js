/* 
Given an integer array nums, 
move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without 
making a copy of the array.
*/

function moveZeroes(nums) {
  // loop nums -> 0,1,0,3,12
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    //  pull out the zero from the array
    if (num === 0) {
      nums.splice(nums.indexOf(0), 1);
      nums.push(0);
    }
  }
  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
// console.log(moveZeroes([0])); // [0]

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#moveZeroes", () => {
    it("should return [1,3,12,0,0]", () => {
      expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    });
    it("should return [0]", () => {
      expect(moveZeroes([0])).toEqual([0]);
    });
  });
}
