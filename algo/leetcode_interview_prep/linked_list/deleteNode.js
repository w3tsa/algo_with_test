/* 
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the
first node of head.

All the values of the linked list are unique, and it is guaranteed that the
given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing
it from memory. We mean:

The value of the given node should not exist in the linked list. The number of
nodes in the linked list should decrease by one. All the values before node
should be in the same order. All the values after node should be in the same
order. Custom testing:

For the input, you should provide the entire linked list head and the node to be
given node. node should not be the last node of the list and should be an actual
node in the list. We will build the linked list and pass the node to your
function. The output will be the entire list after calling your function.
*/

class ListNode {
  constructor(val) {
    this.head = val;
    this.next = null;
    this.length = 0;
  }

  add(val) {
    const node = new ListNode(val);
    let current = this.head;

    if (!this.head) {
      current = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }
}

const list1 = new ListNode(4);
list1.add(5);
console.log(list1);
console.log(list1.size());

function deleteNode() {
  return;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.only('#deleteNode', () => {
    it('should return fl', () => {
      expect(deleteNode(['flower', 'flow', 'flight'])).toEqual('fl');
    });
    it('should return ""', () => {
      expect(deleteNode(['dog', 'racecar', 'car'])).toEqual('');
    });
  });
}
