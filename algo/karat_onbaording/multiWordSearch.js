const grid1 = [
  ['b', 'a', 'b'],
  ['y', 't', 'a'],
  ['x', 'x', 't'],
];
const words1_1 = ['bat', 'by'];

const grid2 = [
  ['A', 'B', 'A', 'B'],
  ['B', 'A', 'B', 'A'],
  ['A', 'B', 'Y', 'B'],
  ['B', 'Y', 'A', 'A'],
  ['A', 'B', 'B', 'A'],
];
const words2_1 = ['ABABY', 'ABY', 'AAA', 'ABAB', 'BABB'];
const words2_2 = ['ABABA', 'ABA', 'BAB', 'BABA', 'ABYB'];

const grid3 = [
  ['X', 'A', 'B', 'C'],
  ['A', 'B', 'X', 'X'],
  ['X', 'C', 'X', 'X'],
];
const words3_1 = ['AB', 'ABC'];

const grid4 = [
  ['B', 'A', 'B', 'A'],
  ['X', 'B', 'X', 'X'],
];
const words4_1 = ['AB', 'BA'];

function findWordLocation() {
  return;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('findWordLocation', () => {
    it('should return the coord of the word matched in the grid', () => {
      expect(findWordLocation(grid1, word1_1)).toEqual([
        (1, 1),
        (1, 2),
        (1, 3),
        (2, 3),
        (3, 3),
        (3, 4),
      ]);
      expect(findWordLocation(grid1, word1_2)).toEqual([
        (0, 2),
        (0, 3),
        (0, 4),
        (0, 5),
        (0, 6),
        (0, 7),
        (1, 7),
      ]);
      expect(findWordLocation(grid1, word1_3)).toEqual(
        [(4, 3), (5, 3), (5, 4)] || [(5, 2), (5, 3), (5, 4)] || [(5, 5), (5, 6), (5, 7)]
      );
      expect(findWordLocation(grid1, word1_4)).toEqual(
        [(3, 4), (3, 5), (3, 6)] || [(3, 4), (3, 5), (4, 5)]
      );
      expect(findWordLocation(grid1, word1_5)).toEqual([(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]);
    });
    it('should return the coord of the word matched in the grid', () => {
      expect(findWordLocation(grid2, word2_1)).toEqual([0, 0]);
    });
  });
}
