/* 
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

export default function isPalindrome(number) {
  return String(number).split("").reverse().join("") === String(number);
}

isPalindrome(121);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip("#isPalindrome", () => {
    it("should return true", () => {
      expect(isPalindrome(121)).toBe(true);
    });
    it("should return false", () => {
      expect(isPalindrome(-121)).toBe(false);
    });
    it("should return false", () => {
      expect(isPalindrome(10)).toBe(false);
    });
  });
}
