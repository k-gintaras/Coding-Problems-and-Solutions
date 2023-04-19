// statement: implement a binary search tree
// description: A binary search tree is a data structure that stores data in a hierarchical structure, allowing for efficient retrieval of data.
// It is composed of nodes, each of which contains a key, a left child, and a right child.
// The left child is smaller than the parent node, and the right child is larger than the parent node.
// The tree is organized so that searching for a particular key is efficient.
// inputExample: A list of integers

// TODO: practice this thing few more times, it seems to be kinda hard
// especially if you want it balanced
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// we have no clue about this, so time to learn and research
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //first try and kinda wrong but works
  fillCareless(arr) {
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      this.addCareless(n);
    }
  }

  // advanced solution
  fill(arr) {
    arr = arr.sort((a, b) => {
      return a - b;
    });
    this.root = this.addBalanced(arr);
  }

  // correct solution
  fillUnbalanced(arr) {
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      this.add(n);
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

  addBalanced(arr) {
    if (!arr.length) {
      return null;
    }
    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);
    root.left = this.addBalanced(arr.slice(0, mid));
    root.right = this.addBalanced(arr.slice(mid + 1));
    return root;
  }

  add(n) {
    // need to keep adding from the top to keep it balanced
    const node = new Node(n);
    if (!this.root) {
      this.root = node;
    } else {
      this.addRecursive(n, this.root);
    }
    // correct binary search tree has all values left be below top, not just below current

    // if (n < this.current.key) {
    //   if (this.current.left) {
    //     this.current = this.current.left;
    //   } else {
    //     this.current.left = node;
    //   }
    // } else {
    //   this.current.right = node;
    //   if (this.current.right) {
    //     this.current = this.current.right;
    //   } else {
    //     this.current.right = node;
    //   }
    // }
    // if (this.current.key) {
    //   if (n < this.current.key) {
    //     this.current.left = node;
    //   } else {
    //     this.current.right = node;
    //   }
    // } else {
    //   if (n < this.current.key) {
    //     this.current = this.current.left;
    //   } else {
    //     this.current = this.current.right;
    //   }
    //   this.add(n);
    // }

    // if (!this.root) {
    //   this.root = node;
    // } else {
    //   let current = this.root;
    //   while (current.key) {
    //     // check if we going left or right
    //     if (n < current.key) {
    //       // left
    //       if (!current.left) {
    //         // left is not taken
    //         current.left = node;
    //       } else {
    //         // left is taken, so we continue search
    //         current = current.left;
    //       }
    //     } else {
    //       // right
    //       if (!current.right) {
    //         current.right = node;
    //       } else {
    //         current = current.right;
    //       }
    //     }
    //   }
    // }
  }
  addCareless(n) {
    const node = new Node(n);
    if (!this.root) {
      this.root = node;
    } else {
      // look for unfilled key
      let current = this.current;
      // current=current.left or right
      if (n < current.key) {
        current.left = node;
      } else {
        current.right = node;
      }
    }
    this.current = node;
  }
  get() {
    return this.root;
  }
}

// function binarySearchTree(arr) {
// }
