/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

let head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } },
};

head = reverseList(head);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('removeNthFromEnd', () => {
    it('should reverse the linkedList', () => {
      expect(reverseList(head)).toEqual(head);
    });
  });
}
