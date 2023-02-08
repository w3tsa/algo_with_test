/* 
Given a signed 32-bit integer x, 
return x with its digits reversed. 
If reversing x causes the value to go outside the 
signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to 
store 64-bit integers (signed or unsigned).
*/

function reverseInteger(int) {
  let reversed = 0;
  let max = Math.pow(2, 31) - 1;
  let min = -1 * Math.pow(2, 31);

  while (int !== 0) {
    let digit = int % 10;
    int = parseInt(int / 10);

    if (reversed > max / 10 || (reversed === max / 10 && digit > 7)) return 0;
    if (reversed < min / 10 || (reversed === min / 10 && digit < -8)) return 0;

    reversed = reversed * 10 + digit;
  }

  return reversed;
}

// console.log(reverseInteger(123));
// console.log(reverseInteger(-123));
// console.log(reverseInteger(120));
// console.log(reverseInteger(1534236469));
// console.log(reverseInteger(900000));
// console.log(reverseInteger(-321));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip("#reverseInteger", () => {
    it("should return 321", () => {
      expect(reverseInteger(123)).toEqual(321);
    });
    it("should return -321", () => {
      expect(reverseInteger(-123)).toEqual(-321);
    });
    it("should return 21", () => {
      expect(reverseInteger(120)).toEqual(21);
    });
    it("should return 0", () => {
      expect(reverseInteger(1534236469)).toEqual(0);
    });
  });
}
