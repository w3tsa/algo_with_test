// function setReducer(input) {
//   if(input.length <= 1) return input[0];
//   const result = [];
//   for (let i = 0; i <= input.length - 1; i++) {
//     let current = input[i];
//     let next = input[i + 1];
//     let sum = 1;
//     if(current !== next) {
//       result.push(1);
//     } else if(current === next) {
//       while(input[i] === input[i + 1]) {
//         sum++;
//         i++;
//       }
//       result.push(sum);
//     }
//   }
//   return setReducer(result);
// }

function setReducer(input) {
  if (input.length === 1) return input[0];
  const result = [];

  for (let i = 0, count = 1; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      result.push(count);
      count = 1;
    }
  }

  return setReducer(result);
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])); // 2
console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 5])); // 2
console.log(setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2])); // 3

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe('@mostLikely', () => {
    it('should return the expected', () => {
      expect(mostLikely('1:3', '1:2')).toEqual(false);
    });
    it('should return the expected', () => {
      expect(mostLikely('1:2', '1:3')).toEqual(true);
    });
    it('should return the expected', () => {
      expect(mostLikely('1:4', '1:3')).toEqual(false);
    });
    it('should return the expected', () => {
      expect(mostLikely('1:5', '1:4')).toEqual(false);
    });
    it('should return the expected', () => {
      expect(mostLikely('34:941', '38:837')).toEqual(false);
    });
    it('should return the expected', () => {
      expect(mostLikely('217:258', '56:213')).toEqual(true);
    });
  });
}
