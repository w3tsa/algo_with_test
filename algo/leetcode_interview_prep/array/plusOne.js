/* 
You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer.
 The digits are ordered from most significant to least significant
  in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

function plusOne(digits) {
  // we can join the digits array [1,2,3] -> 123 -> Number(123)
  let numberArray = BigInt(digits.join(""));
  let stringArray = String(numberArray + BigInt(1)).split("");
  let result = [];
  for (let str of stringArray) {
    result.push(Number(str));
  }

  // increment Number(123) + 1 -> 124 -> split('')
  return result;
}

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#plusOne", () => {
    it("should return [1,2,4]", () => {
      expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });
    it("should return [4, 3, 2, 2]", () => {
      expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });
    it("should return [1,0]", () => {
      expect(plusOne([9])).toEqual([1, 0]);
    });
    it("should return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]", () => {
      expect(
        plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
      ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
    });
  });
}
