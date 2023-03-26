/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root) {
  return isValidBSTHelper(root, -Infinity, Infinity);
}

function isValidBSTHelper(node, minValue, maxValue) {
  // base case an empty tree is always a valid BST
  if (!node) return true;

  // check if the current node violates the BST property
  if (node.val <= minValue || node.val >= maxValue) {
    return false;
  }
  console.log(maxValue);
  return (
    isValidBSTHelper(node.left, minValue, node.val) &&
    isValidBSTHelper(node.right, node.val, maxValue)
  );
}

let tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(3);

let tree2 = new TreeNode(5);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(4);
tree2.right.left = new TreeNode(3);
tree2.right.right = new TreeNode(6);

console.log(isValidBST(tree1)); // true
// console.log(isValidBST(tree2)); // false

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#isValidBST', () => {
    it('should return true', () => {
      expect(isValidBST(tree1)).toEqual(true);
    });
    it('should return false', () => {
      expect(isValidBST(tree2)).toEqual(false);
    });
  });
}
