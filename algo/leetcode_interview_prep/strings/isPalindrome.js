/* 
A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s) {
  let newString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseString = newString.split("").reverse().join("");
  return newString === reverseString;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("0P"));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip("#isPalindrome", () => {
    it("should return true", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
    });
    it("should return false", () => {
      expect(isPalindrome("race a car")).toEqual(false);
    });
    it("should return true", () => {
      expect(isPalindrome(" ")).toEqual(true);
    });
    it("should return false", () => {
      expect(isPalindrome("0P")).toEqual(false);
    });
  });
}
