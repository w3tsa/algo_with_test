/* 
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3


Input: root = [1,null,2]
Output: 2

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root) {
  if (!root) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

console.log(maxDepth(tree1));
// console.log(maxDepth([1, null, 2]));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#maxDepth', () => {
    it('should return 3', () => {
      expect(maxDepth(tree1)).toEqual(3);
    });
  });
}
