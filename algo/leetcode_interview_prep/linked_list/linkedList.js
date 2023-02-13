/* 
Create a linked list with the bellow methods.
- [x] Push -> Should push an item to the end of the linked list
- [x] Pop -> Should remove an item from the end of the linked list
- [ ] Shift -> Should insert an item at the beginning of the linked list
- [ ] Unshift -> should remove an item from the beginning of the linked list
- [ ] Remove -> should remove an item from any index and keep the from of a LL
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new LinkedList();
list.push(2);
list.push(3);
list.push(4);
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list);
