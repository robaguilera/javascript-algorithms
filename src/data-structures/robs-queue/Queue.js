export default class Queue {
  constructor() {
    this.list = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.list.length === 0;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    return this.list[0];
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.list.push(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.list.shift();
  }
}
