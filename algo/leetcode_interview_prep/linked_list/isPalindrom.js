/* 
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true
*/

class Node {
  constructor(val, next = null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

function isPalindrome(head) {
  let values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== values[values.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

let node1 = new Node(1);
node1.next = new Node(2);
node1.next.next = new Node(2);
node1.next.next.next = new Node(1);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome(node1)).toBe(true);
    });
  });
}
