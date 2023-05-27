/* 
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
*/

function hammingDistance(x, y) {
  let xorResult = x ^ y;
  let distance = 0;
  while (xorResult !== 0) {
    if (xorResult & 1) {
      distance++;
    }
    xorResult >>>= 1;
  }
  return distance;
}
// console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
