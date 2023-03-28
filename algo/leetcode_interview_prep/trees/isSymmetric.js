/* 
Given the root of a binary tree, check whether it is a 
mirror of itself (i.e., symmetric around its center).

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root) {
  // empty tree is symmetric
  if (!root) return true;
  return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right) {
  // base case: if left and right both are null, then it is symmetric
  if (!left && !right) return true;
  // check if either of node is null or left.val !== right.val, which means not symmetric
  if (!left || !right || left.val !== right.val) return false;

  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);

tree1.right = new TreeNode(2);
tree1.right.right = new TreeNode(3);
tree1.right.left = new TreeNode(4);

// console.log(tree1);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#isSymmetric', () => {
    it('should return true', () => {
      expect(isSymmetric(tree1)).toEqual(true);
    });
  });
}
