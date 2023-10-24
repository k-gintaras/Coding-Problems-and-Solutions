//     statement: Find the diameter of a binary tree
//     description: The diameter of a binary tree is the length of the longest path between any two nodes in the tree
//  It is also the maximum number of edges between two nodes in the tree
//
//     inputExample: A binary tree represented as an array

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.maxDiameter = 0;
    this.curDiameter = 0;
  }

  add(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.curDiameter = 0;
      this.addRecursive(node, this.root);
      if (this.curDiameter > this.maxDiameter) {
        this.maxDiameter = this.curDiameter;
      }
    }
  }

  createBalanced(arr) {
    arr.sort().sort((a, b) => a - b);
    this.root = this.createBalancedBst(arr, 0, arr.length - 1);
  }

  createBalancedBst(arr, start, end) {
    if (start > end) {
      return null;
    }
    const middle = Math.floor((start + end) / 2);
    const node = new Node(arr[middle]);
    node.left = this.createBalancedBst(arr, start, middle - 1);
    node.right = this.createBalancedBst(arr, middle + 1, end);

    return node;
  }

  getDistance() {
    return this.maxDiameter;
  }

  addRecursive(nodeToAdd, nodeInto) {
    this.curDiameter++;
    if (nodeToAdd.value > nodeInto.value) {
      // go right
      if (nodeInto.right) {
        // already used go into
        this.addRecursive(nodeToAdd, nodeInto.right);
      } else {
        nodeInto.right = nodeToAdd;
      }
    } else {
      //go left
      if (nodeInto.left) {
        // already used go into
        this.addRecursive(nodeToAdd, nodeInto.left);
      } else {
        nodeInto.left = nodeToAdd;
      }
    }
  }

  diameter() {
    return this.calculateDiameter(this.root).diameter;
  }

  calculateDiameter(node) {
    if (!node) {
      return { height: 0, diameter: 0 };
    }
    const leftResult = this.calculateDiameter(node.left);
    const rightResult = this.calculateDiameter(node.right);

    const height = Math.max(leftResult.height, rightResult.height) + 1; // height is whichever higher left or right
    const currentDiameter = leftResult.height + rightResult.height; // diameter is both heights
    const diameter = Math.max(
      currentDiameter,
      leftResult.diameter,
      rightResult.diameter
    ); // whichever diameter result is highest
    return { height, diameter };
  }
}

export function binaryTreeDiameter1(arr) {
  const t = new Tree();
  for (const n in arr) {
    t.add(n);
  }
  return t.diameter();
}
export function binaryTreeDiameter2(tree) {
  const t = new Tree();
  return t.calculateDiameter(tree.root).diameter;
}

export function binaryTreeDiameter3(arr) {
  const t = new Tree();
  t.createBalanced(arr);
  return t.diameter();
}
