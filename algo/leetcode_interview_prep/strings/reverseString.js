/* 
Write a function that reverses a string. 
The input string is given as an array of characters s.
You must do this by modifying the input array 
in-place with O(1) extra memory.
*/

function reverseString(array) {
  return array.reverse();
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip("#reverseString", () => {
    it("should return ['o','l','l','e','h']", () => {
      expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
        "o",
        "l",
        "l",
        "e",
        "h",
      ]);
    });
    it("should return ['h','a','n','n','a','H']", () => {
      expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
        "h",
        "a",
        "n",
        "n",
        "a",
        "H",
      ]);
    });
  });
}
