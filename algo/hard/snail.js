function snail(array) {
  let result = [];
  let n = array.length;

  if (n === 0) {
    return result;
  }

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    // Traverse right column
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;

    // Check if there are more rows to traverse
    if (top <= bottom) {
      // Traverse bottom row
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }

    // Check if there are more columns to traverse
    if (left <= right) {
      // Traverse left column
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }

  return result;
}

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  const testCases = [
    {
      array: [[]],
      expected: [],
    },
    {
      array: [[1]],
      expected: [1],
    },
    {
      array: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
    {
      array: [
        [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      ],
      expected: [
        1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13,
      ],
    },
    {
      array: [
        [
          [1, 2, 3, 4, 5, 6],
          [20, 21, 22, 23, 24, 7],
          [19, 32, 33, 34, 25, 8],
          [18, 31, 36, 35, 26, 9],
          [17, 30, 29, 28, 27, 10],
          [16, 15, 14, 13, 12, 11],
        ],
      ],
      expected: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      ],
    },
  ];

  describe.skip('snail', () => {
    testCases.forEach(({ array, expected }) => {
      it('should return an array in the snail round', () => {
        expect(snail(array)).toEqual(expected);
      });
    });
  });
}
