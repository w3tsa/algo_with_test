/* 
You are given an n x n 2D matrix representing an image, 
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, 
which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
*/

function rotateImage(matrix) {
  let n = matrix.length;
  //   Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //   revers each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
}

// console.log(
//   rotateImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// [[7,4,1],[8,5,2],[9,6,3]]

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#rotateImage", () => {
    it("should return [[7,4,1],[8,5,2],[9,6,3]]", () => {
      expect(
        rotateImage([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ])
      ).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]);
    });
    it("should return [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", () => {
      expect(
        rotateImage([
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16],
        ])
      ).toEqual([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ]);
    });
  });
}
