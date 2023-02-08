/* 
Given an integer array nums, 
rotate the array to the right by k steps, 
where k is non-negative.
*/

function rotateArray(nums, k) {
  if (nums.length === k || k === 0 || nums.length === 1) return nums;
  if (k === 0) return nums;
  // TODO:
  k = k % nums.length;
  let tail = nums.slice(-k);
  let head = nums.slice(0, nums.length - k);
  nums.splice(0, nums.length, ...tail, ...head);
  return nums;
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateArray([1, 2], 3));
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 11));
// console.log(rotateArray([1], 0));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#rotateArray", () => {
    it("should return [5,6,7,1,2,3,4]", () => {
      expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
        5, 6, 7, 1, 2, 3, 4,
      ]);
    });
    it("should return [3,99,-1,-100]", () => {
      expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
    });
    it("should return [2,1]", () => {
      expect(rotateArray([1, 2], 3)).toEqual([2, 1]);
    });
    it("should return [2,3,4,5,6,1]", () => {
      expect(rotateArray([1, 2, 3, 4, 5, 6], 11)).toEqual([2, 3, 4, 5, 6, 1]);
    });
    it("should return [1]", () => {
      expect(rotateArray([1], 0)).toEqual([1]);
    });
    it("should return [1,2]", () => {
      expect(rotateArray([1, 2], 2)).toEqual([1, 2]);
    });
  });
}
