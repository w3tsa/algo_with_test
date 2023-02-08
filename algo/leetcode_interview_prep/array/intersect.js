/* 
Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must appear as many times 
as it shows in both arrays and you may return 
the result in any order.
*/
function intersect(nums1, nums2) {
  let result = [];
  if (nums1.length > nums2.length) {
    nums2.some((num) => {
      let matchedNum = nums1.indexOf(num);
      // console.log(matchedNum);
      if (matchedNum > -1) {
        result.push(num);
        nums1.splice(matchedNum, 1);
      }
    });
  } else {
    nums1.some((num) => {
      let matchedNum = nums2.indexOf(num);
      if (matchedNum > -1) {
        result.push(num);
        nums2.splice(matchedNum, 1);
      }
    });
  }
  return result;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([3, 1, 2], [1, 1]));
// console.log(intersect([1, 2, 2, 1], [2]));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#intersect", () => {
    it("should return [2,2]", () => {
      expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    });
    it("should return [4,9]", () => {
      expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    });
    it("should return [1]", () => {
      expect(intersect([3, 1, 2], [1, 1])).toEqual([1]);
    });
    it("should return [2]", () => {
      expect(intersect([1, 2, 2, 1], [2])).toEqual([2]);
    });
  });
}
