/* 
Implement the myAtoi(string s) function, 
which converts a string to a 32-bit signed 
integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. 
   Read this character in if it is either. This determines if the final result is 
   negative or positive respectively. 
   Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the 
   input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
   If no digits were read, then the integer is 0. Change the sign as necessary 
   (from step 2).
5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], 
   then clamp the integer so that it remains in the range. Specifically, 
   integers less than -231 should be clamped to -231, and 
   integers greater than 231 - 1 should be clamped to 231 - 1.
6. Return the integer as the final result.
*/

function myAtoi(s) {
  let i = 0;
  let sign = 1;
  let result = 0;
  let max = Math.pow(2, 31) - 1;
  let min = -1 * Math.pow(2, 31);

  // skip whitespace
  while (s.charAt(i) === ' ') {
    i++;
  }

  // check if first non-whitespace character is '-' or '+'
  if (s.charAt(i) === '-') {
    sign = -1;
    i++;
  } else if (s.charAt(i) === '+') i++;

  // Read in the digits
  while (i < s.length && s.charAt(i) >= '0' && s.charAt(i) <= '9') {
    result = result + s.charAt(i);
    i++;
  }

  // Clamp the result to the 32-bit signed integer range
  result *= sign;
  if (result > max) return max;
  else if (result < min) return min;
  else return result;
}

// console.log(myAtoi('4193')); // 4193
// console.log(myAtoi('4193 with words')); // 4193
// console.log(myAtoi('with words 4193 ')); // 0
// console.log(myAtoi('     -42')); // -42
// console.log(myAtoi('-91283472332')); // -2147483648
// console.log(myAtoi('')); // 0
// console.log(myAtoi('  -0012a42')); // 0

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#myAtoi', () => {
    it('should return 42', () => {
      expect(myAtoi('42')).toEqual(42);
    });
    it('should return -42', () => {
      expect(myAtoi('   -42')).toEqual(-42);
    });
    it('should return 4193', () => {
      expect(myAtoi('4193 with words')).toEqual(4193);
    });
    it('should return 0', () => {
      expect(myAtoi('words and 987')).toEqual(0);
    });
    it('should return -2147483648', () => {
      expect(myAtoi('-91283472332')).toEqual(-2147483648);
    });
    it('should return 0', () => {
      expect(myAtoi('')).toEqual(0);
    });
    it('should return -12', () => {
      expect(myAtoi('  -0012a42')).toEqual(-12);
    });
  });
}
