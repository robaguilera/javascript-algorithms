import Queue from "../Queue";

describe("Queue", () => {
  it("should create empty queue", () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it("should enqueue data to queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.list[0]).toBe(1);
    expect(queue.list[1]).toBe(2);
  });

  it("should peek data from queue", () => {
    const queue = new Queue();
    queue.enqueue(1);

    expect(queue.peek()).toBe(1);
  });

  it("should check if queue is empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it("should dequeue from queue in FIFO order", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.list).toEqual([1, 2]);

    queue.dequeue();
    expect(queue.list).toEqual([2]);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
