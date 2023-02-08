/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be 
validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

function isValidSudoku(board) {
  //  check for rows
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (row.has(board[i][j])) return false;
        row.add(board[i][j]);
      }
    }
  }

  //   check for col
  for (let i = 0; i < 9; i++) {
    const col = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (col.has(board[j][i])) return false;
        col.add(board[j][i]);
      }
    }
  }

  // check for 3x3 sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let box = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let cell = board[i + k][j + l];
          if (cell !== ".") {
            if (box.has(cell)) return false;
            box.add(cell);
          }
        }
      }
    }
  }

  return true;
}

// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#isValidSudoku", () => {
    it("should return true", () => {
      expect(
        isValidSudoku([
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ])
      ).toEqual(true);
    });
    it("should return false", () => {
      expect(
        isValidSudoku([
          ["8", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ])
      ).toEqual(false);
    });
    it("should return false", () => {
      expect(
        isValidSudoku([
          [".", ".", ".", ".", "5", ".", ".", "1", "."],
          [".", "4", ".", "3", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", "3", ".", ".", "1"],
          ["8", ".", ".", ".", ".", ".", ".", "2", "."],
          [".", ".", "2", ".", "7", ".", ".", ".", "."],
          [".", "1", "5", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", "2", ".", ".", "."],
          [".", "2", ".", "9", ".", ".", ".", ".", "."],
          [".", ".", "4", ".", ".", ".", ".", ".", "."],
        ])
      ).toEqual(false);
    });
  });
}
