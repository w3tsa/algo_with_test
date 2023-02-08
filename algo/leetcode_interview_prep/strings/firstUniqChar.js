/* 
Given a string s, find the first non-repeating 
character in it and return its index. 
If it does not exist, return -1.
*/

function firstUniqChar(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let ltr = str[i];
    map.has(ltr) ? map.set(ltr, map.get(ltr) + 1) : map.set(ltr, 1);
  }

  for (let i = 0; i < str.length; i++) {
    const ltr = str[i];
    if (map.get(ltr) === 1) {
      return i;
    }
  }

  return -1;
}

// console.log(firstUniqChar("leetcode")); // l -> 0
// console.log(firstUniqChar("loveleetcode")); // v -> 2

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip("#firstUniqChar", () => {
    it("should return 0", () => {
      expect(firstUniqChar("leetcode")).toEqual(0);
    });
    it("should return 2", () => {
      expect(firstUniqChar("loveleetcode")).toEqual(2);
    });
    it("should return -1", () => {
      expect(firstUniqChar("aabb")).toEqual(-1);
    });
  });
}
