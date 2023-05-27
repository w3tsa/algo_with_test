/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

function isvalidParentheses(str) {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let element = str[i];

    if (Object.keys(obj).includes(element)) {
      stack.push(element);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if (obj[last] !== element) return false;
    }
  }
  return stack.length === 0;
}

console.log(isvalidParentheses('()')); // true
console.log(isvalidParentheses('(]')); // false

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip('#isvalidParentheses', () => {
    it('should return true', () => {
      expect(isvalidParentheses('()')).toEqual(true);
    });
    it('should return true', () => {
      expect(isvalidParentheses('()[]{}')).toEqual(true);
    });
    it('should return false', () => {
      expect(isvalidParentheses('(]')).toEqual(false);
    });
    it('should return false', () => {
      expect(isvalidParentheses('([)]')).toEqual(false);
    });
    it('should return true', () => {
      expect(isvalidParentheses('{[]}')).toEqual(true);
    });
    it('should return false', () => {
      expect(isvalidParentheses('({{{{}}}))')).toEqual(false);
    });
  });
}
