/* 
Given an integer array nums, return true if any value appears at least twice 
in the array, and return false if every element is distinct.
*/

function containsDuplicate(nums) {
  // {1:1, 2:0, 3: 0}
  let map = new Map();
  //   let map = {};
  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    // map[num] ? map[num]++ : (map[num] = 1);
  }
  // console.log(map);
  for (let num of nums) {
    if (map.get(num) > 1) {
      return true;
    }

    // if (map[num] > 1) {
    //   return true;
    // }
  }
  return false; // true or false
}

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([-24500, -24500]));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#containsDuplicate", () => {
    it("should return true", () => {
      expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    });
    it("should return false", () => {
      expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    });
    it("should return true", () => {
      expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
    });
    it("should return true", () => {
      expect(containsDuplicate([-24500, -24500])).toEqual(true);
    });
  });
}
