/* 
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

const tree1 = new TreeNode(0);
tree1.left = new TreeNode(-3);
tree1.left.left = new TreeNode(-10);
tree1.right = new TreeNode(9);
tree1.right.left = new TreeNode(5);

const tree2 = new TreeNode(0);
tree2.left = new TreeNode(-10);
tree2.left.right = new TreeNode(-3);
tree2.right = new TreeNode(5);
tree2.right.right = new TreeNode(9);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('#sortedArrayToBST', () => {
    it('should return a BST [0,-3,9,-10,null,5]', () => {
      expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(tree1 || tree2);
    });
  });
}
