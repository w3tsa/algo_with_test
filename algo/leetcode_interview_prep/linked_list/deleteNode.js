/* 
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.

*/

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedListNode {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  deleteNode(val) {
    let nodeToDelete = new ListNode(val);
    nodeToDelete.next = this.head;
    this.head = nodeToDelete.next;
    this.length--;
  }
}

const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(1);
const node4 = new ListNode(9);

// console.log(newList.deleteNode(5));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('deleteNode', () => {
    it('should delete a node', () => {
      expect(newList.deleteNode(5)).toEqual([4, 1, 9]);
    });
  });
}
