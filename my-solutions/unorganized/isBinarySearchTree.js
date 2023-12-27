//     statement: Check if a binary tree is a binary search tree
//     description: A binary search tree is a type of binary tree in which the left subtree of a node contains only nodes with values less than the node's value, and the right subtree of a node contains only nodes with values greater than or equal to the node's value
//     inputExample: A binary tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// basically root node
export function isBinarySearchTree(tree) {
  // hints:
  // recursion
  // values can be inserted only certain way, if i remember right, bigger go right, smaller go left
  // what is allowed to be below each node...

  // if max difference 1 it is balanced?
  const root = tree;
  return isBST(root, null, null);
}

function isBST(node, min, max) {
  // if nothing inside then it is balanced mini BST
  if (!node) return true;

  // both are correct, check both
  if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
    return false;
  }

  return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}

// just practice...
function isBSTRecursive(node, min, max) {
  if (!node) return true; // simplest case, it is valid tree

  // if min and below min or max and above max, then it is badly built
  if ((min && node.value <= min) || (max && node.value >= max)) return false;
  return isBSTRecursive(node.left, min, node.value) && isBSTRecursive(node.right, node.value, max);
}
