import LinkedNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new LinkedNode(value);

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

    const newNode = new LinkedNode(value);
    // make this node the new head by shifting the current head
    newNode.next = this.head;

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  search(value) {
    const errorMsg = `Sorry, your value of ${value} was not found 👎🏽`;
    const successMsg = `Great Success! Your value of ${value} was found 🥳`;
    let currentHead = this.head;

    if (!this.head) {
      return "Nothing exists here so nothing to look for 🤦🏽‍♂️";
    }

    while (currentHead) {
      if (currentHead.value === value) {
        return successMsg;
      } else {
        currentHead = currentHead.next;
      }
    }

    // nothing is found so display error message
    return errorMsg;
  }

  delete(value) {
    // value that will serve as the iteration
    let currentHead = this.head;
    if (!this.head) {
      return "You have nothing to delete";
    }

    // if it's the head we're deleting then replace this head with the next node
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
    } else {
      while (currentHead.next) {
        if (currentHead.next.value === value) {
          currentHead.next = currentHead.next.next;
        } else {
          currentHead = currentHead.next;
        }
      }
    }

    // check it the tail has to be deleted too
    if (this.tail.value === value) {
      this.tail = currentHead;
    }
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
