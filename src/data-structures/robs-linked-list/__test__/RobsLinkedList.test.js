import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should add a node to linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.next).toBeNull();
  });

  it("should prepend node to linked list", () => {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.prepend(3);

    expect(linkedList.head.value).toBe(3);
    expect(linkedList.head.next.value).toBe(1);
  });

  it("should delete node by value from linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.delete(5)).toBe("You have nothing to delete");

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    linkedList.delete(1);

    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(5);
  });

  it("should find node by value", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.search(3)).toBe(
      "Great Success! Your value of 3 was found 🥳"
    );
    expect(linkedList.search("foo")).toBe(
      "Sorry, your value of foo was not found 👎🏽"
    );
  });
});
