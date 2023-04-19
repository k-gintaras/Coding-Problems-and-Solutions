class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// TODO: get() remove() find()

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  fill(arr) {
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      this.add(n);
    }
  }

  add(n) {
    const node = new Node(n);
    if (!this.root) {
      this.root = node;
    } else {
      this.addRecursive(n, this.root);
    }
  }

  addRecursive(n, node) {
    const newNode = new Node(n);
    if (node) {
      if (node.key > n) {
        if (node.left) {
          this.addRecursive(n, node.left);
        } else {
          node.left = newNode;
        }
      } else {
        if (node.right) {
          this.addRecursive(n, node.right);
        } else {
          node.right = newNode;
        }
      }
    }
  }
}
