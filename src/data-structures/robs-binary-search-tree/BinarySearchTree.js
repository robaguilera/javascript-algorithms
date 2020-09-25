class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    const result = this.containsNode(this.root, value);

    if (!result) {
      return false;
    }

    return result.value;
  }

  containsNode(node, value) {
    // reached the end of the line time to bail
    if (!node) {
      return false;
    }

    // bingo return the parent and value
    if (node.data === value) {
      return { node, value };
    }

    // keep looking in the left branch
    if (node.left && node.left.data >= value) {
      return this.containsNode(node.left, value);
    }

    // keep looking in the right branch
    return this.containsNode(node.right, value);
  }

  printLeftLeg() {
    const printLeft = (node) => {
      while (node.left) {
        this.print(node);
        printLeft(node.left);
      }
    };

    if (!this.root) {
      return false;
    }

    printLeft(this.root);
  }

  print(node) {
    console.log(node.data);
  }

  get rootNode() {
    return this.root;
  }
}
