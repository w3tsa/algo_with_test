/* 
Imagine we have an image. we will represent this image as a simple 2D array 
where every pixel is a 1 or a 0. the image you get is known to have a single 
rectangle of 0s on a background of 1s.
 write a function that takes in the image and returns the 
 top-left coordinate, width, and height of the rectangle of 0s

The time complexity of the javascript solution is O(nm), 
where n is the number of rows and m is the number of columns of the image
 */

function findRectangle(array) {
  let row,
    column,
    width = -1,
    height = -1;

  //   for loop to get every cell of the 2Darray
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let cell = array[i][j];
      if (cell === 0) {
        if (row === undefined) {
          row = j;
          column = i;
        }
        width = Math.max(width, j - row + 1);
        height = Math.max(height, i - column + 1);
      }
    }
  }

  return { row, column, width, height };
}

const image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

// console.log(findRectangle(image1)); // row: 2, column: 3, width: 3, height: 2
// console.log(findRectangle(image2)); // row: 3, column: 5, width: 2, height: 2

/* python */

// def findRectangle(image):
//     topLeftX, topLeftY, width, height = None, None, 0, 0

//     for i in range(len(image)):
//         for j in range(len(image[i])):
//             if image[i][j] == 0:
//                 if topLeftX is None:
//                     topLeftX, topLeftY = j, i
//                 width = max(width, j - topLeftX + 1)
//                 height = max(height, i - topLeftY + 1)

//     return (topLeftX, topLeftY, width, height)

/* Java

int[][] image1 = {
  {1,1,1,1,1,1,1},
  {1,1,1,1,1,1,1},
  {1,1,1,0,0,0,1},
  {1,1,1,0,0,0,1},
  {1,1,1,1,1,1,1},
}

int[][] image1 = {
  {1,1,1,1,1,1,1},
  {1,1,1,1,1,1,1},
  {1,1,1,1,1,1,1},
  {1,1,1,1,1,0,0},
  {1,1,1,1,1,0,0},
}
*/

/* 

class Solution {
    public int[] findRectangle(int[][] image) {
        int topLeftX = -1, topLeftY = -1, width = 0, height = 0;
        for(int i = 0; i < image.length; i++){
            for(int j = 0; j < image[i].length; j++){
                if(image[i][j] == 0){
                    if(topLeftX == -1){
                        topLeftX = j;
                        topLeftY = i;
                    }
                    width = Math.max(width, j - topLeftX + 1);
                    height = Math.max(height, i - topLeftY + 1);
                }
            }
        }
        int[] rect = {topLeftX, topLeftY, width, height};
        return rect;
    }
}


*/

/* c#

int[][] image1 = new int[][]
{
  new int [] {1,1,1,1,1,1,1},
  new int [] {1,1,1,1,1,1,1},
  new int [] {1,1,1,0,0,0,1},
  new int [] {1,1,1,0,0,0,1},
  new int [] {1,1,1,1,1,1,1},
}

int[][] image1 = new int[][]
{
  new int [] {1,1,1,1,1,1,1},
  new int [] {1,1,1,1,1,1,1},
  new int [] {1,1,1,1,1,1,1},
  new int [] {1,1,1,1,1,0,0},
  new int [] {1,1,1,1,1,0,0},
}

*/
/* 
class Solution
{
    public int[] FindRectangle(int[,] image)
    {
        int topLeftX = -1, topLeftY = -1, width = 0, height = 0;
        int rows = image.GetLength(0);
        int cols = image.GetLength(1);
        for(int i = 0; i < rows; i++)
        {
            for(int j = 0; j < cols; j++)
            {
                if(image[i,j] == 0)
                {
                    if(topLeftX == -1)
                    {
                        topLeftX = j;
                        topLeftY = i;
                    }
                    width = Math.Max(width, j - topLeftX + 1);
                    height = Math.Max(height, i - topLeftY + 1);
                }
            }
        }
        int[] rect = {topLeftX, topLeftY, width, height};
        return rect;
    }
}

*/

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#findRectangle", () => {
    const image1 = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];

    const image2 = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
    ];
    it("should return { row: 2, column: 3, width: 3, height: 2 }", () => {
      expect(findRectangle(image1)).toEqual({
        row: 2,
        column: 3,
        width: 3,
        height: 2,
      });
    });
    it("should return { row: 3, column: 5, width: 2, height: 2 }", () => {
      expect(findRectangle(image2)).toEqual({
        row: 3,
        column: 5,
        width: 2,
        height: 2,
      });
    });
  });
}
