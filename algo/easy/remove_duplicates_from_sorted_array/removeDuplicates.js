/* 
remove duplicates from a given nums array.
*/

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

removeDuplicates([1, 1, 2]);

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#removeDuplicates", () => {
    it("should return [1,2]", () => {
      expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
    });
    it("should return [0,1,2,3,4]", () => {
      expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([
        0, 1, 2, 3, 4,
      ]);
    });
  });
}
