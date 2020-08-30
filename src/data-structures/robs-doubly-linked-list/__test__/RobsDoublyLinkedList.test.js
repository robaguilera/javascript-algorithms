import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("should add node to linked list", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.previous.value).toBe(1);
  });

  it("should prepend node to linked list", () => {
    const linkedList = new DoublyLinkedList();

    linkedList.add(1);
    linkedList.prepend(2);
    // order should be 2, 1
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(1);

    linkedList.add(3);
    linkedList.prepend(4);
    // order should be 4, 2, 1, 3
    expect(linkedList.head.value).toBe(4);
    expect(linkedList.head.next.next.value).toBe(1);
    expect(linkedList.head.next.next.previous.value).toBe(2);
    expect(linkedList.tail.value).toBe(3);
  });

  it("should delete node by value from linked list", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.delete(5)).toBe("You have nothing to delete");

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(5);

    linkedList.delete(1);
    // list should be 2, 3, 4, 5
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(5);
    expect(linkedList.head.next.value).toBe(3);
    expect(linkedList.head.previous).toBe(null);

    linkedList.delete(4);
    // list should 2, 3, 5
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(5);
    expect(linkedList.head.next.value).toBe(3);
    expect(linkedList.head.next.previous.value).toBe(2);

    linkedList.delete(5);
    // list should 2, 3
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.tail.previous.value).toBe(2);
  });
});
