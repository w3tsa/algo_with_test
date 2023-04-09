/* 
parent node will be the largest number in the tree.
Note: Always have priority queues.
math: find the child from the parent: 
left child: 2n + 1
right child: 2n + 2
find the parent from children: Math.floor(n-1/2)
*/

class MaxBinaryHeap {
  constructor(values) {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index],
        ];
      }

      index = parentIndex;
    }
    return this.value;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
    }
    // trickle down
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
    // console.log(max, end);
    return max;
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(55);
// maxBinaryHeap.insert(45);
// maxBinaryHeap.insert(1);
// maxBinaryHeap.insert(100);
// maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap);

// let result = [55, 45, 12, 32];

// if (import.meta.vitest) {
//   const { describe, it, expect } = import.meta.vitest;

//   describe('maxBinaryHeap', () => {
//     it('should return a new heap with the new value', () => {
//       expect(maxBinaryHeap.insert(55)).toEqual(result);
//     });
//   });
// }
