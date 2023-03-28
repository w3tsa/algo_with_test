/* 
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

const tree2 = new TreeNode(1);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#levelOrder', () => {
    it('should return [[3],[9,20],[15,7]]', () => {
      expect(levelOrder(tree1)).toEqual([[3], [9, 20], [15, 7]]);
    });
    it('should return [[1]]', () => {
      expect(levelOrder(tree2)).toEqual([[1]]);
    });
  });
}
