/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(str) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    if (elem in obj) {
      stack.push(elem);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (obj[last] !== elem) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// console.log(isValid("()")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// console.log(isValid("()[]{}")); // true

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#isValid", () => {
    it("should return true", () => {
      expect(isValid("()")).toEqual(true);
    });
    it("should return true", () => {
      expect(isValid("()[]{}")).toEqual(true);
    });
    it("should return false", () => {
      expect(isValid("(]")).toEqual(false);
    });
    it("should return false", () => {
      expect(isValid("([)]")).toEqual(false);
    });
    it("should return true", () => {
      expect(isValid("{[]}")).toEqual(true);
    });
    it("should return false", () => {
      expect(isValid("({{{{}}}))")).toEqual(false);
    });
  });
}
