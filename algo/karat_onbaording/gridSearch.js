/* 
You are running a classroom and suspect that some of your students are passing
around the answer to a multiple-choice question in 2D grids of letters. The word
may start anywhere in the grid, and consecutive letters can be either
immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word
in the grid as a list of coordinates. If there are multiple matches, return any
one.


All test cases:

search(grid1, word1_1) => [(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4)]
search(grid1, word1_2) => [(0, 2), (0, 3), (0, 4), (0, 5), (0, 6), (0, 7), (1, 7)]
search(grid1, word1_3) => [(4, 3), (5, 3), (5, 4)] OR 
                          [(5, 2), (5, 3), (5, 4)] OR 
                          [(5, 5), (5, 6), (5, 7)]
search(grid1, word1_4) => [(3, 4), (3, 5), (3, 6)] OR
                          [(3, 4), (3, 5), (4, 5)]                           
search(grid1, word1_5) => [(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]

search(grid2, word2_1) => [(0, 0)]

search(grid3, word3_1) => [(0, 0), (0, 1), (1, 1)]
search(grid3, word3_2) => [(2, 0), (3, 0), (4, 0)]

search(grid4, word4_1) => [(1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)] OR
                          [(0, 1), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)]

Complexity analysis variables:

r = number of rows
c = number of columns
w = length of the word
*/

const grid1 = [
  ['b', 'b', 'c', 'c', 'e', 's', 'c', 'n'],
  ['a', 'l', 'b', 'a', 'l', 'l', 'o', 'o'],
  ['b', 'a', 't', 'e', 'w', 'c', 'e', 'w'],
  ['a', 'l', 'o', 's', 's', 'e', 'c', 'c'],
  ['w', 'o', 'o', 'w', 'a', 'c', 'a', 'w'],
  ['i', 'b', 'w', 'o', 'w', 'w', 'o', 'w'],
];
const word1_1 = 'access'; // [(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4)]
const word1_2 = 'balloon'; // [(0, 2), (0, 3), (0, 4), (0, 5), (0, 6), (0, 7), (1, 7)]

const word1_3 = 'wow'; // [(4, 3), (5, 3), (5, 4)] OR
// [(5, 2), (5, 3), (5, 4)] OR
// [(5, 5), (5, 6), (5, 7)]

const word1_4 = 'sec'; // [(3, 4), (3, 5), (3, 6)] OR
// [(3, 4), (3, 5), (4, 5)]

const word1_5 = 'bbaal'; // [(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]

const grid2 = [['a']];
const word2_1 = 'a';

const grid3 = [
  ['c', 'a'],
  ['t', 't'],
  ['h', 'a'],
  ['a', 'c'],
  ['t', 'g'],
];
const word3_1 = 'cat'; // [0,1]
const word3_2 = 'hat';

const grid4 = [
  ['c', 'c', 'x', 't', 'i', 'b'],
  ['c', 'a', 't', 'n', 'i', 'i'],
  ['a', 'x', 'n', 'x', 'p', 't'],
  ['t', 'x', 'i', 'x', 't', 't'],
];
const word4_1 = 'catnip'; // [(1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)] OR
// [(0, 1), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)]

function search(grid, word) {
  let result = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        let found = dfs(grid, i, j, 0, word);
        if (found) {
          return found;
        }
      }
    }
  }

  return result;
}

function dfs(grid, i, j, k, word) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
    return false;
  }
  if (grid[i][j] !== word[k]) {
    return false;
  }
  if (k === word.length - 1) {
    return [[i, j]];
  }

  let result = dfs(grid, i + 1, j, k + 1, word);
  if (result) {
    result.unshift([i, j]);
    return result;
  }

  result = dfs(grid, i, j + 1, k + 1, word);
  if (result) {
    result.unshift([i, j]);
    return result;
  }

  return false;
}

let grid = [
  ['b', 'b', 'b', 'a', 'l', 'l', 'o', 'o'],
  ['b', 'a', 'c', 'c', 'e', 's', 'c', 'n'],
  ['a', 'l', 't', 'e', 'w', 'c', 'e', 'w'],
  ['a', 'l', 'o', 's', 's', 'e', 'c', 'c'],
  ['w', 'o', 'o', 'w', 'a', 'c', 'a', 'w'],
  ['i', 'b', 'w', 'o', 'w', 'w', 'o', 'w'],
];

let word = 'access';
console.log(search(grid, word));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('search', () => {
    it('should return the coord of the word matched in the grid', () => {
      expect(search(grid1, word1_1)).toEqual([(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4)]);
      expect(search(grid1, word1_2)).toEqual([
        (0, 2),
        (0, 3),
        (0, 4),
        (0, 5),
        (0, 6),
        (0, 7),
        (1, 7),
      ]);
      expect(search(grid1, word1_3)).toEqual(
        [(4, 3), (5, 3), (5, 4)] || [(5, 2), (5, 3), (5, 4)] || [(5, 5), (5, 6), (5, 7)]
      );
      expect(search(grid1, word1_4)).toEqual([(3, 4), (3, 5), (3, 6)] || [(3, 4), (3, 5), (4, 5)]);
      expect(search(grid1, word1_5)).toEqual([(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]);
    });
    it('should return the coord of the word matched in the grid', () => {
      expect(search(grid2, word2_1)).toEqual([0, 0]);
    });
  });
}
