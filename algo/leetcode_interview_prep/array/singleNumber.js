/* 
Given a non-empty array of integers nums, 
every element appears twice except for one. 
Find that single one.
You must implement a solution with a linear runtime 
complexity and use only constant extra space.
*/
function singleNumber(nums) {
  if (nums.length === 1) return nums[0];
  let map = new Map();
  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (let num of nums) {
    if (map.get(num) === 1) {
      return num;
    }
  }
  return null;
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#singleNumber", () => {
    it("should return 1", () => {
      expect(singleNumber([2, 2, 1])).toEqual(1);
    });
    it("should return 4", () => {
      expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
    });
    it("should return 1", () => {
      expect(singleNumber([1])).toEqual(1);
    });
  });
}
