function find_word_locations(grid, words) {
  const result = [];

  for (const word of words) {
    let found = false;

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === word[0] && search(grid, row, col, word, 0)) {
          result.push(getLocations(grid, row, col, word, 0));
          found = true;
          break;
        }
      }

      if (found) {
        break;
      }
    }
  }

  return result;
}

function search(grid, row, col, word, index) {
  if (index === word.length) {
    return true;
  }

  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return false;
  }

  if (grid[row][col] !== word[index]) {
    return false;
  }

  const temp = grid[row][col];
  grid[row][col] = '#';

  const found =
    search(grid, row + 1, col, word, index + 1) || search(grid, row, col + 1, word, index + 1);

  grid[row][col] = temp;

  return found;
}

function getLocations(grid, row, col, word, index) {
  const locations = [];

  if (index === word.length) {
    return locations;
  }

  locations.push([row, col]);
  const temp = grid[row][col];
  grid[row][col] = '#';

  if (search(grid, row + 1, col, word, index + 1)) {
    locations.push(...getLocations(grid, row + 1, col, word, index + 1));
  } else if (search(grid, row, col + 1, word, index + 1)) {
    locations.push(...getLocations(grid, row, col + 1, word, index + 1));
  }

  grid[row][col] = temp;

  return locations;
}

const grid1 = [
  ['b', 'a', 'b'],
  ['y', 't', 'a'],
  ['x', 'x', 't'],
];

const words1_1 = ['bat', 'by'];

// console.log(find_word_locations(grid1, words1_1));
