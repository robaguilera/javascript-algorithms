class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  swap(index1, index2) {
    const positionToSwapTo = this.queue[index1];

    this.queue[index1] = this.queue[index2];
    this.queue[index2] = positionToSwapTo;

    return this.queue;
  }

  bubbleUp() {
    let insertedElementIdx = this.queue.length - 1;

    while (insertedElementIdx > 0) {
      const parentIdx = insertedElementIdx - 1;
      const parentValue = this.queue[parentIdx];
      const insertedElementValue = this.queue[insertedElementIdx];
      // if the value is greater than the parent, swap em
      if (insertedElementValue > parentValue) {
        this.swap(insertedElementIdx, parentIdx);
        insertedElementIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    const element = this.queue[0];
    const currentIdx = 0;

    // if there's no swaps needed we'll break out of the loop
    while (true) {
      let indexToSwap = null;
      // NOTE: not sure I understand why this formula
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 1;
      const leftChild = this.queue[leftChildIdx];
      const rightChild = this.queue[rightChildIdx];

      if (leftChild > element) {
        indexToSwap = leftChildIdx;
      } else if (rightChild > element) {
        indexToSwap = leftChildIdx;
      }

      if (!indexToSwap) {
        break;
      }

      this.swap(currentIdx, indexToSwap);

      // repeat the loop from the current Idx;
      this.currentIdx = indexToSwap;
    }
  }

  // push value to the end and call the bubble up method
  enqueue(newNode) {
    this.queue.push(newNode);
    this.bubbleUp();

    return this.queue;
  }

  deleteNode(nodeValue) {
    const nodeIdx = this.search(nodeValue);

    if (nodeIdx > -1) {
      this.swap(nodeIdx, this.queue.length - 1);
      this.queue.pop();
      this.bubbleDown();
    }
  }

  search(nodeValue) {
    const value = this.queue.findIndex((node) => node === nodeValue);

    return value;
  }

  get isQueueEmpty() {
    return this.queue.length < 1;
  }

  get frontItem() {
    if (this.isQueueEmpty) return "Nothing in queue";
    return this.queue[0];
  }

  get lastItem() {
    if (this.isQueueEmpty) return "Nothing in queue";
    return this.queue.length - 1;
  }
}
