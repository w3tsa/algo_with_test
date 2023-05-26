/* 
Heaps are like trees

MaxBinaryHeaps -> parent node is always Larger than the children
MinBinaryHeaps -> parent node is always Smallest than the children

math: find the child from the parent: n is index
left child: 2n + 1
right child: 2n + 2
find the parent from children: Math.floor(n-1/2)
*/

/* MaxBinaryHeaps */

class MaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    if (element) {
      this.values.push(element);
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];

      if (element > parentElement) {
        this.values[idx] = this.values[parentIdx];
        this.values[parentIdx] = element;
      }
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swappedIdx = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (element < leftChild) {
          swappedIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swappedIdx === null && element < rightChild) ||
          (swappedIdx !== null && leftChild < rightChild)
        ) {
          swappedIdx = rightChildIdx;
        }
      }
      if (swappedIdx === null) break;
      this.values[idx] = this.values[swappedIdx];
      this.values[swappedIdx] = element;

      idx = swappedIdx;
    }
  }
}

const heap = new MaxBinaryHeaps();
// heap.insert(55);
// heap.insert(199);
// heap.insert(1);
// heap.insert(null);
// [ 199, 55, 41, 39, 27, 12, 33, 18, 1 ]
// [ 1, 55, 41, 39, 27, 12, 33, 18 ]
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.values);
