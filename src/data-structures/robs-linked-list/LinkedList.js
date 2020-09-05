// import LinkedListNode from "./LinkedListNode";

const defaultComparatorFunction = _.isEqual;
class LinkedList {
  constructor(comparatorFunction = defaultComparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = comparatorFunction;
  }

  add(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    if (!this.head) {
      this.add(value);
      return;
    }

    const newNode = new LinkedListNode(value);
    // make this node the new head by shifting the current head
    newNode.next = this.head;

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  search({ value, callback = undefined }) {
    let currentHead = this.head;

    while (currentHead) {
      // if we specified a callback then use that to find the value
      if (callback && callback(currentHead.value)) {
        return currentHead;
      }

      if (currentHead.value === value) {
        return currentHead;
      } else {
        currentHead = currentHead.next;
      }
    }

    return null;
  }

  delete({ value, callback = this.compare }) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    // value that will serve as the iteration
    let currentHead = this.head;

    // if it's the head we're deleting then replace this head with the next node
    if (this.head && callback(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      while (currentHead.next) {
        if (callback(currentHead.next.value, value)) {
          deletedNode = currentHead.next;
          currentHead.next = currentHead.next.next;
        } else {
          currentHead = currentHead.next;
        }
      }
    }

    // check it the tail has to be deleted too
    if (callback(this.tail.value, value)) {
      this.tail = currentHead.next;
    }

    return deletedNode;
  }

  traverse() {
    if (!this.head) {
      return "You have nothing to traverse";
    }
    while (this.head.next !== null) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
    // NOTE: So we log out that last value
    console.log(this.head.value);
  }

  reverseTraversal() {
    if (!this.tail) {
      return "You have nothing to traverse in reverse";
    }

    let current = this.tail;

    while (current !== this.head) {
      // TODO:
    }
  }
}
