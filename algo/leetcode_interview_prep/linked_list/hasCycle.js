/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

*/

class Node {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

function hasCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next; // to avoid false positive with even length list

  while (fast && fast.next) {
    if (slow === fast) return true; // found a cycle

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

const node1 = new Node(3, null);
node1.next = new Node(2, null);
node1.next.next = new Node(0, null);
node1.next.next.next = new Node(-4, node1.next);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('hasCycle', () => {
    it('should return true if there is a cycle in the linked list', () => {
      expect(hasCycle(node1)).toBe(true);
    });
  });
}
