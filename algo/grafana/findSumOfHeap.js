function findSumOfheap(arrays) {
  const result = [];
  const heap = new MinHeap();

  // Initialize heap with the first element from all arrays
  for (let i = 0; i < arrays.length; i++) {
    const [time, value] = arrays[i].shift();
    heap.enqueue({ time, value, arrayIdx: i });
  }

  while (!heap.isEmpty()) {
    const { time, value, arrayIdx } = heap.dequeue();

    if (result.length === 0 || time !== result[result.length - 1][0]) {
      result.push([time, value]);
    } else {
      result[result.length - 1][1] += value;
    }

    if (arrays[arrayIdx].length > 0) {
      const [nextTime, nextValue] = arrays[arrayIdx].shift();

      heap.enqueue({ time: nextTime, value: nextValue, arrayIdx: arrayIdx });
    }
  }

  return result;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (element.time >= parent.time) break;
      this.heap[idx] = parent;
      this.heap[parentIdx] = element;

      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.heap.length;
    let element = this.heap[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swappedIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];

        if (leftChild.time < element.time) {
          swappedIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swappedIdx === null && rightChild.time < element.time) ||
          (swappedIdx !== null && rightChild.time < leftChild.time)
        ) {
          swappedIdx = rightChildIdx;
        }
      }

      if (swappedIdx == null) break;
      this.heap[idx] = this.heap[swappedIdx];
      this.heap[swappedIdx] = element;
      idx = swappedIdx;
    }
  }
}

// const minHeap = new MinHeap();
// minHeap.enqueue({ time: 0, value: 1, idx: 0 });
// minHeap.enqueue({ time: 5, value: 3, idx: 1 });
// minHeap.enqueue({ time: 6, value: 7, idx: 2 });
// console.log(minHeap.dequeue());
// console.log(minHeap.dequeue());
// console.log(minHeap.dequeue());
// console.log(minHeap);

const arrays = [
  [
    [0, 1],
    [5, 3],
    [6, 7],
  ],
  [
    [0, 1],
    [3, 6],
    [4, 7],
  ],
];

const result = findSumOfheap(arrays);
console.log(result);
