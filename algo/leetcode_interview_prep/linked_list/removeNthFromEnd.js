/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

class node {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

var removeNthFromEnd = function (head, n) {
  // create two pointers
  let slow = head;
  let fast = head;
  // move the fast pointer n nodes ahead of the slow pointer
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // if the fast pointer is null, it means the nth node from the end is the head node
  if (!fast) {
    // console.log(head.next);
    return head.next;
  }
  // move both pointer until the fast pointer reaches the end of the list
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // remove the nth node from the end of the list
  slow.next = slow.next.next;
  // return the head of the list
  return head;
};

let head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } },
};
let n = 2;
if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('removeNthFromEnd', () => {
    it('should remove the nth node from the end of the list and return its head', () => {
      expect(removeNthFromEnd(head, n)).toEqual(head);
    });
  });
}
