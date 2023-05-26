/* 

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Additional stack to keep track of minimum value
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  push(value) {
    this.stack.push(value);

    // updated the minimum stack
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    const poppedValue = this.stack.pop();

    // updated the minimum stack if the popped value was the minimum value
    if (poppedValue === this.getMin()) {
      this.minStack.pop();
    }
    return poppedValue;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('MinStack', () => {
    it('should return -3', () => {
      expect(minStack.getMin()).toEqual(-3);
    });
    it('should return -3', () => {
      expect(minStack.pop()).toEqual(-3);
    });
    it('should return 0', () => {
      expect(minStack.top()).toEqual(0);
    });
    it('should return -2', () => {
      expect(minStack.getMin()).toEqual(-2);
    });
  });
}
