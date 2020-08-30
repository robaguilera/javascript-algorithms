import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe("DoublyLinkedListNode", () => {
  it("should create list node with value", () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });
});
